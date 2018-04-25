import React, { Component } from 'react';
import './App.css';
import SideNav from "../SideNav/SideNav";
import SearchInput from "../SearchInput/SearchInput";
import Notifications from "../Notifications/Notifications";
import User from "../User/User";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <SideNav/>
        </div>
        <div className="main">
          <header className="header">
            <SearchInput/>
            <div>
              <Notifications/>
              <User/>
            </div>
          </header>
          <div className="content">
            <p></p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
