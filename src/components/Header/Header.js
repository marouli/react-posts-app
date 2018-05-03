import React, { Component } from 'react';
import './Header.css';
import SearchInput from "./SearchInput/SearchInput";
import Notifications from "./Notifications/Notifications";
import User from "./User/User";

class App extends Component {

  render() {
    return (
      <header className="header__container--fixed">
        <div className="header__content--flex">
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
