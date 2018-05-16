import React, {Component} from 'react';
import './PostsBoard.css';
import Post from './Post/Post';

class PostsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts')
      .then(response => response.json())
      .then(posts => fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users ,
                                      posts: posts})))
  }

  render() {
    let posts = this.state.posts;
    let users = this.state.users;
    return (
      <section className="posts__container--scrolling">
        <div className="posts--scrolled">
          {posts.map(post =>
            <Post
              data={post}
              key={post.id}
              users={users}
            />)}
        </div>
      </section>
    )
  }
}

export default PostsBoard;