import React, {Component} from 'react';
// import Comment from './Comment';
import CommentForm from './CommentForm';


class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{"id": 1, "author": "Emil De Valk", "text": "Interesting video. Certainly worth to take a look at. ", "date": "4 weeks ago"},
        {"id": 2, "author": "Alex Olieman", "text": "I'm not sure if it matters for us, but DSE should play well with Azure.", "date": "3 weeks, 2 days ago"}]
    };
  }

  handleCommentSubmit(comment) {
    this.state.data.push(comment);
    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    this.setState((oldState, props) => {
      return {
        data: newComments
      };
    });
  }

  render () {
    return (
      <div className="comment__box">
        <CommentForm data={this.state.data} onCommentSubmit={() => this.handleCommentSubmit()} />
      </div>
    );
  }
}

export default CommentBox;