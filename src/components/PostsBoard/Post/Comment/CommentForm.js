import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCommentText: ""
    };
  }

  render() {
    return (
      <form className="comment__form" onSubmit={this._handleSubmit.bind(this)}>
        <input
          className="comment"
          type="text"
          placeholder="Write a comment..."
          value={this.state.newCommentText}
          onChange={e => this._handleChange(e)}
          onKeyPress={e => this._handleKey(e)} />
        <button className="submit__comment" type="submit">Post comment</button>
        <button className="like__comment" type="button">Like</button>
      </form>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();

    this.props.addComment(this._author.value, this._body.value);

    this._author.value = '';
    this._body.value = '';

    // // empty messages not allowed
    // if (this.state.newCommentText === "")
    //   return false;
    //
    // //lets the parent CommentList know about the new comment
    // this.props.onNewComment(this.state.newCommentText);
    //
    // //clear the comment box
    // this.setState(oldState => ({
    //   newCommentText: ""
    // }));
    //
    // return true;
  }

  _handleChange(e) {
    const newComment = e.target.value;

    this.setState(oldState => ({
      newCommentText: newComment
    }))
  }

  _handleKey(e) {
    //charCode 13 is ENTER
    if (e.which === 13)
      this._handleSubmit(e);
  }
}

export default CommentForm;