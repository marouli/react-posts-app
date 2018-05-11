import React, {Component} from 'react';
import './PostsBoard.css';
import Post from './Post/Post';

class PostsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3004/posts/')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    let posts = this.state.posts;
    return (
      <section className="posts__container--scrolling">
        <div className="posts--scrolled">
          {posts.map(post => <Post data={post} key={post.id}/>)}
        </div>
      </section>
    )
  }
}

export default PostsBoard;