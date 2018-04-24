import React, { Component } from 'react';
import './App.css';
import SideNav from "../SideNav/SideNav";
import SearchInput from "../SearchInput/SearchInput";
import Notifications from "../Notifications/Notifications";
import User from "../User/User";

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideNav/>
        <SearchInput/>
        <Notifications/>
        <User/>
      </div>
    );
  }
}

export default App;
