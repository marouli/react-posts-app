import React from 'react';
import CommentBox from './Comment/CommentBox';
import './Post.css';

function Post(props) {
  let data = props.data;
  let users = props.users;
  let author = users.filter(author => author.id === data.authorId)[0];

  return (
    <section className="c-post">
      <header className="c-post__header">
        <img className="c-post__avatar" src={author.avatarUrl}></img>
        <h5 className="c-post__author-name">{author.name}</h5>
        <h6 className="c-post__author-job">{author.jobTitle}</h6>
        <time className="c-post__date">{data.date}</time>
      </header>
      <main className="c-post__main">
          <img className="c-post__img" src={data.image}></img>
        <h5 className="c-post__title">{data.title}</h5>
        <p className="c-post__content">{data.content}</p>
      </main>
      <CommentBox postId={data.id} users={users}/>
    </section>
  );
}

export default Post;