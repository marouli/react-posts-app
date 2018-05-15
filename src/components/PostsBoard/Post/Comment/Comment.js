import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {}
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
      <div className="comment">
        {/*<span className="author__avatar" src={author.avatarUrl}></span>*/}
        <h2 className="author__name">{author.name}</h2>
        <p className="comment__content">{data.content}</p>
      </div>
    );
  }
}

export default Comment;