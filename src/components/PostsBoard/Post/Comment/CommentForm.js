import React, {Component} from 'react';
import './CommentForm.css';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this._getRandomAuthor = this._getRandomAuthor.bind(this);
  }

  _getRandomAuthor(){
    let users = this.props.users;
    return users[Math.floor(Math.random()*users.length)];
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let jsonData = {};
    for (const [key, value] of formData.entries()) {
      // prevent empty comments to be added
      if (jsonData.content === "") {
        alert("Please write a comment first!");
        return false;
      }
      jsonData[key] = value;
    }

    fetch('http://localhost:3004/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    }).then(res => res.json())
      .then(data => this.props.onCommentSubmit(data));

    event.target.reset();
  };

  render() {
    let author = this._getRandomAuthor();
    return(
      <form className="c-comment-form" name="commentForm" id="commentForm" onSubmit={this.handleSubmit}>
        <input className="c-comment-input" type="text" placeholder="Write a comment..." id="content" name="content"/>
        <input type="hidden" id="postId" name="postId" value={this.props.postId}/>
        <input type="hidden" id="authorId" name="authorId" value={author.id}/>
        <input type="hidden" id="date" name="date" value={new Date().getDate()}/>
        <div className="c-comment-btn__container">
          <button className="c-comment-sumbit-btn" type="submit">Comment</button>
          <button className="c-comment-like-btn"type="submit">Like</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;