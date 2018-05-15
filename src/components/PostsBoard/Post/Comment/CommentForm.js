import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _getRandomAuthor(){}


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
      .then(data => this.setState({ newComment: data }));
  };

  render() {
    const data = this.state.newComment;
    return(
      <form name="commentForm" id="commentForm" className="comment__form" onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="Comment here..." id="content" name="content"/>
          <input type="hidden" id="postId" name="postId" value="1"/>
          <input type="hidden" id="authorId" name="authorId" value="1"/>
          <input type="hidden" id="date" name="date" value="now"/>
        <button type="submit">Post Comment</button>
      </form>
    );
  }
}

export default CommentForm;