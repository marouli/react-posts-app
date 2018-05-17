import React, { Component } from 'react';
import './Header.css';
import SearchInput from "./SearchInput/SearchInput";
import Notifications from "./Notifications/Notifications";
import User from "./User/User";

class App extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__container--flex">
          <SearchInput/>
          <div>
            <Notifications/>
            <User/>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
