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
      <div>

        <form action="" method="post">
          <input
            className="comment__new"
            type="text"
            placeholder="Write a comment..."
            value={this.state.newCommentText}
            onChange={e => this.handleChange(e)}
            onKeyPress={e => this.handleKey(e)}/>
          <input className="submit__comment" type="submit" value="Comment"/>
          <button className="like__comment" type="button">Like</button>
        </form>

        <div className='comment'>
          <div className='comment__author'>
            {this.props.author}
          </div>
          <div className='comment__body'>
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: comments
    };
  }

  render(){
    console.log(this.props.comments);
    const commentNodes = this.state.data.map((comment) => {
      return <Comment author={comment.authorName} key={comment.id}>{comment.commentText}</Comment>
    });

    return (
      <div className='comment__list'>
        {commentNodes}
      </div>
    );
  }
}

class CommentForm extends Component {
  render(){
    return (
      <div className='comment__form'>
        CommentForm
      </div>
    );
  }
}

class CommentBox extends Component {
  render(){
    return (
      <div className='comment__box'>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;