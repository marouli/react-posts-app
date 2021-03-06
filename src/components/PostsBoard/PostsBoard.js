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
      .then(posts =>
        fetch('http://localhost:3004/users')
          .then(response => response.json())
          .then(users => this.setState({posts: posts,
                                        users: users})
          )
      )
  }

  render() {
    let posts = this.state.posts;
    let users = this.state.users;
    return (
      <section className="s-posts">
          {posts.map(post =>
            <Post
              data={post}
              key={post.id}
              users={users}
            />)}
      </section>
    )
  }
}

export default PostsBoard;