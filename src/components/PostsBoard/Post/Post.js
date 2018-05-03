import React, {Component} from 'react';
import './Post.css';

import post from '../../../data/post.json';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: post
    };
  }

  render() {
    return (
      this.state.data.map((post) => {
        return <section className="post">
          <header className="post__header">
            <span className="author__avatar" alt={post.avatarAlt}></span>
            <h5 className="author__fullname">{post.authorName}</h5>
            <h6 className="author__jobTitle">{post.authorJobTitle} |</h6>
            <time className="post__date">{post.postDate}</time>
          </header>
          <main>
            <img src='./img/bfeatures.png' className="post__content__img"></img>
            <h5 className="post__title">{post.postTitle}</h5>
            <p className="post__content">{post.postContent}</p>
            <form action="" method="post">
              <input className="post__comment" type="text" value="Write a comment..."/>
              <input className="submit__comment" type="submit" value="Comment"/>
              <button className="like__comment" type="button">Like</button>
            </form>
          </main>
        </section>
      })
    )
  }
}

export default Post;