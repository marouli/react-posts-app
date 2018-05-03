import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }

  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });

    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={this.state.author.avatarUrl}
               alt={this.state.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }
}