import React, {Component} from 'react';
import './PostsBoard.css';
import Post from './Post/Post';

class PostsBoard extends Component {

  render() {
    return (
      <section className="posts__container--scrolling">
        <div className="posts--scrolled">
          <Post/>
        </div>
      </section>
    )
  }
}

export default PostsBoard;