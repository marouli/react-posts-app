import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let authorVal = e.target[0].value.trim();
    let textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }

    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }

  render() {
    return(
      <form className="comment-form form-group" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="input-group">
          <span className="input-group-addon">Name</span>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-addon">Comment</span>
          <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    );
  }
}

export default CommentForm;