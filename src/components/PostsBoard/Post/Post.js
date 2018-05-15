import React, {Component} from 'react';
import CommentBox from './Comment/CommentBox';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
      comments: []
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3004/users/${this.props.data.authorId}`)
      .then(response => response.json())
      .then(data => this.setState({ author: data }));
  }

  render() {
    let author = this.state.author;
    let data = this.props.data;
    return (
        <section className="post">
          <header className="post__header">
            <span className="author__avatar" src={author.avatarUrl}></span>
            <h5 className="author__name">{author.name}</h5>
            <h6 className="author__jobTitle">{author.jobTitle} |</h6>
            <time className="post__date">{data.date}</time>
          </header>
          <main>
            <img src='./img/bfeatures.png' className="post__content__img"></img>
            <h5 className="post__title">{data.title}</h5>
            <p className="post__content">{data.content}</p>
          </main>
          <CommentBox postId={data.id}/>
        </section>
    );
  }
}

export default Post;