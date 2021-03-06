import React, {Component} from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentBox.css';


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
      <div className="c-comment-box">
        <CommentForm
            postId={this.props.postId}
            onCommentSubmit={this.handleCommentSubmit}
            users={users}/>
        <div className="c-comment-list">
          <p className="c-comment-box__header">{this.state.comments.length} Comments</p>
          {comments.map(comment =>
            <Comment
              data={comment}
              users={users}
            />)}
        </div>
      </div>
    );
  }
}

export default CommentBox;