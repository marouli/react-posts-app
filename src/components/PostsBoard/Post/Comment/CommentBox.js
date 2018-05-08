import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import comments from '../../../../data/comments.json';

// class CommentList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: comments
//     };
//   }
//
//   render(){
//     console.log(this.props.comments);
//     const commentNodes = this.state.data.map((comment) => {
//       return <Comment author={comment.authorName} key={comment.id}>{comment.commentText}</Comment>
//     });
//
//     return (
//       <div className='comment__list'>
//         {commentNodes}
//       </div>
//     );
//   }
// }

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComments: false,
      commentsList: [],
      data : comments
    }
  }

  componentDidMount() {
    fetch('comments.json')
      .then(results => {
        console.log(results);
        return results.json;
      })
      .then(data => {
        let userInfo = data.results.map((info) => {
          return(
            <div key={userInfo.id}>
              <Comment />
            </div>
          )
        })
        this.setState({})
    })
  }

  render(){
    const comments = this._getComments();
    return (
      <div className="comment__box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <div className="comment__list">
          {comments}
        </div>
      </div>
    );
  }

  _getComments() {
    return this.state.commentsList.map((comment) => {
      return <Comment
                {...comment}/>
    })
  }

  _addComment(commentAuthor, commentBody, commentDate) {
    let comment = {
      id: this.state.comments.length + 1,
      author: commentAuthor,
      body: commentBody,
      date: commentDate
    }

    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }
}

export default CommentBox;