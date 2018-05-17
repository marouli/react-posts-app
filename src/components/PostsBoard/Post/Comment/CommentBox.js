import React, {Component} from 'react';
import CommentForm from './CommentForm';
import Comment from "./Comment";


class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    const newComments = comments.concat([comment]);
    this.setState((oldState, props) => {
      return {
        comments: newComments
      };
    });
  }

  componentDidMount() {
    fetch(`http://localhost:3004/posts/${this.props.postId}/comments`)
      .then(response => response.json())
      .then(data => this.setState({ comments: data }));
  }

  render () {
    let comments = this.state.comments;
    let users = this.props.users;
    return (
      <div className="comment__box">
        <CommentForm
            postId={this.props.postId}
            onCommentSubmit={this.handleCommentSubmit}
            users={users}/>
        {comments.map(comment =>
          <Comment
            data={comment}
            users={users}
          />)}
      </div>
    );
  }
}

export default CommentBox;