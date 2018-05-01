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
        <header className="post__header">
          <span className="author__avatar"></span>
          <h5 className="author__fullname">Alex Olieman</h5>
          <h6 className="author__jobTitle">R&D Engineer at Qollap |</h6>
          <time className="post--date">{new Date().toJSON().slice(0,10)}</time>
        </header>
        <main>
          <img src='./img/bfeatures.png' className="post__content__img"></img>
          <h5 className="post__content__title">Hey, why don't we use qollap more?</h5>
          <p className="post__content">You know, for teamwork.Or just to share what this submarine captain learned about self-organizing teams:</p>
          <form action="" method="post">
            <input className="post__comment" type="text" value="Write a comment..."/>
            <input className="submit__comment" type="submit" value="Comment"/>
            <button className="like__comment"type="button">Like</button>
          </form>
        </main>
      </section>
    )
  }
}

export default Post;