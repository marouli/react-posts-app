import React, {Component} from 'react';
import CommentBox from './Comment/CommentBox';
import './Post.css';

import post from '../../../data/post.json';
import comments from '../../../data/comments.json';
import CommentForm from "./Comment/CommentForm";


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsData: post,
      commentsData: comments

    };
  }

  render() {
    return (
      this.state.postsData.map((post) => {
        return <section className="post">
          <header className="post__header">
            <span className="author__avatar" alt={post.avatarAlt}></span>
            <h5 className="author__name">{post.authorName}</h5>
            <h6 className="author__jobTitle">{post.authorJobTitle} |</h6>
            <time className="post__date">{post.postDate}</time>
          </header>
          <main>
            <img src='./img/bfeatures.png' className="post__content__img"></img>
            <h5 className="post__title">{post.postTitle}</h5>
            <p className="post__content">{post.postContent}</p>
          </main>
          <CommentBox/>
          <ul className="comment__list">
            {this.state.commentsData.map((comment) => (
              <li key={comment.id} className="comment__list__item">
                <h5>{comment.authorName} | {comment.commentDate}</h5>
                <p>{comment.commentText}</p>
              </li>
            ))}
          </ul>
        </section>
      })
    );
  }
}

export default Post;