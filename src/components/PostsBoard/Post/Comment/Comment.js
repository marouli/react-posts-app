import React from 'react';
import './Comment.css';

function Comment(props) {

  let data = props.data;
  let users = props.users;
  let author = users.filter(author => author.id == data.authorId)[0];

  return (
    <div className="comment">
      <span className="author__avatar" src={author.avatarUrl}></span>
      <h5 className="author__name">{author.name}</h5>
      <p className="comment__content">{data.content}</p>
    </div>
  );
}

export default Comment;