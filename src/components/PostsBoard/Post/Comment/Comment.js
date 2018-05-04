import React, {Component} from 'react';

import comments from '../../../../data/comments.json';

class Comment extends Component {
  constructor(props) {
    super(props);
    // set up the initial state
    this.state = {
      newCommentText: ""
    };
  }

  doSubmit() {
    // empty messages not allowed
    if (this.state.newCommentText === "")
      return false;

    //lets the parent CommentList know about the new comment
    this.props.onNewComment(this.state.newCommentText);

    //clear the comment box
    this.setState(oldState => ({
      newCommentText: ""
    }));

    return true;
  }

  handleChange(e) {
    const newComment = e.target.value;

    this.setState(oldState => ({
      newCommentText: newComment
    }))
  }

  handleKey(e) {
    //charCode 13 is ENTER
    if (e.which === 13)
      this.doSubmit();
  }

  render() {
    return (
      <form action="" method="post">
        <input
          className="comment"
          type="text"
          placeholder="Write a comment..."
          value={this.state.newCommentText}
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.handleKey(e)}/>
        <input className="submit__comment" type="submit" value="Comment"/>
        <button className="like__comment" type="button">Like</button>
      </form>
    );
  }
}

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.initialComments || []
    }
  }

  render() {
    return (
      <div className="comment__new">
        <div className="author__info">
          <img className="author__avatar"
               src={comments.avatarUrl}
               alt={comments.avatarAlt}
          />
          <div className="author__name">
            {comments.authorName}
          </div>
        </div>
        <div className="comment__text">
          {comments.commentText}
        </div>
        <div className="comment__date">
          {comments.commentDate}
        </div>
      </div>
    );
  }
}

export default Comment;