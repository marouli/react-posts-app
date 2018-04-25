import React, {Component} from 'react';
import './PostsBoard.css';
import Post from './Post/Post';

class PostsBoard extends Component {

  render() {
    return (
      <section className="posts__container">
        <Post/>
      </section>
    )
  }
}

export default PostsBoard;