import React, { Component } from 'react';
import './App.css';
import MenuBoard from '../MenuBoard/MenuBoard';
import Header from '../Header/Header';
import PostsBoard from '../PostsBoard/PostsBoard';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <MenuBoard/>
        </div>
        <div className="main">
          <Header/>
          <div className="content">
            <PostsBoard/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
