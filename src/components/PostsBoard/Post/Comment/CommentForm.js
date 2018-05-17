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
      jsonData[key] = value;
    }

    fetch('http://localhost:3004/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    }).then(res => res.json())
      .then(data => this.props.onCommentSubmit(data));
  };

  render() {
    let author = this._getRandomAuthor();
    return(
      <form name="commentForm" id="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Comment here..." id="content" name="content"/>
        <input type="hidden" id="postId" name="postId" value={this.props.postId}/>
        <input type="hidden" id="authorId" name="authorId" value={author.id}/>
        <input type="hidden" id="date" name="date" value={new Date().getDate()}/>
        <button type="submit">Post Comment</button>
      </form>
    );
  }
}

export default CommentForm;