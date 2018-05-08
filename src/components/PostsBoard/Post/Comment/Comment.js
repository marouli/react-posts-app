import React, {Component} from 'react';

import comments from '../../../../data/comments.json';

class Comment extends Component {
  constructor(props) {
    super(props);
    // set up the initial state
    this.state = {
      data: comments
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