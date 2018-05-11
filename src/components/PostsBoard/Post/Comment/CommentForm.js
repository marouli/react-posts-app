import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRandomAuthor(){

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    // const data = new FormData(event.target);
    const data = {
      "postId": 4,
      "authorId": 1,
      "content": "Ahahouha",
      "date": "now"
    }
    console.log(data);
    fetch('http://localhost:3004/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
  }

  render() {
    return(
      <form name="commentForm" id="commentForm" className="comment__form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Comment here..." id="content" name="content"/>
          <input type="hidden" id="postId" name="postId" value="4" />
          <input type="hidden" id="authorId" name="authorId" value="1"/>
          <input type="hidden" id="date" name="date" value="now"/>
        <button>Post Comment</button>
      </form>
    );
  }
}

export default CommentForm;