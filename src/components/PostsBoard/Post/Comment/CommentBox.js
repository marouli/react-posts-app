import React, {Component} from 'react';
import CommentForm from './CommentForm';
import Comment from "./Comment";


class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  // handleCommentSubmit(comment) {
  //   this.state.comments.push(comment);
  //   const comments = this.state.comments;
  //   const newComments = comments.concat([comment]);
  //   this.setState((oldState, props) => {
  //     return {
  //       comments: newComments
  //     };
  //   });
  // }

  componentWillMount() {
    fetch(`http://localhost:3004/posts/${this.props.postId}/comments`)
      .then(response => response.json())
      .then(data => this.setState({ comments: data }));
  }

  render () {
    let comments = this.state.comments;
    return (
      <div className="comment__box">
        <CommentForm/>
        {comments.map(comment => <Comment data={comment}/>)}
      </div>
    );
  }
}

export default CommentBox;