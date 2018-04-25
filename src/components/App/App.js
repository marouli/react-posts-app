import React, { Component } from 'react';
import './App.css';
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <SideNav/>
        </div>
        <div className="main">
          <Header/>
          <div className="content">
            {/*<p></p>*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
