import React, {Component} from 'react';
import './Post.css';


class Post extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     liked: false,
  //     comments: [],
  //     addCommentAreaActive: false
  //   }
  // }
  //
  // _onLikeClickHandler() {
  //   const { likeUnlikePost } = this.props
  //   const { id } = this.props.postData
  //   likeUnlikePost(id)
  // }
  //
  // _onClickCommentButtonHandler() {
  //   let commentText = this.commentText.value
  //   const { addComment } = this.props
  //   const { id } = this.props.postData
  //   let comments
  //   if (!commentText) {
  //     return
  //   }
  //   addComment(id, commentText)
  //   this.commentText.value = ''
  // }
  //
  // _onCommentClickHandler() {
  //   this.setState({
  //     addCommentAreaActive: true
  //   })
  // }
  //
  // _getAddCommentArea() {
  //   return (
  //     <div className="add-comment-area">
  //       {/*<textarea ref={ (ref) => this.commentText = ref } className="form-control" rows="2" placeholder="Your comment"></textarea>*/}
  //       {/*<button className="btn btn-primary" onClick={ this._onClickCommentButtonHandler }>Comment</button>*/}
  //     </div>
  //   )
  // }

  render() {

    return (
      <section className="post">
        <p className="post__content">bla bla bla bla bla...</p>
      </section>
    )
  }
}

export default Post;