import React from 'react';
import CommentBox from './Comment/CommentBox';
import './Post.css';

function Post(props) {

    let data = props.data;
    let users = props.users;
    let author = users.filter(author => author.id === data.authorId)[0];

    return (
      <section className="post">
        <header className="post__header">
          <span className="author__avatar" src={author.avatarUrl}></span>
          <h5 className="author__name">{author.name}</h5>
          <h6 className="author__jobTitle">{author.jobTitle} |</h6>
          <time className="post__date">{data.date}</time>
        </header>
        <main>
          <img src='./img/bfeatures.png' className="post__img"></img>
          <h5 className="post__title">{data.title}</h5>
          <p className="post__content">{data.content}</p>
        </main>
        <CommentBox postId={data.id} users={users}/>
      </section>
    );
}

export default Post;