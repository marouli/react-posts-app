import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let data = this.props.data;
    let users = this.props.users;
    let author = users.filter(author => author.id == data.authorId)[0];
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