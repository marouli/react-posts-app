import React, {Component} from 'react';
import './Header.css';
import SearchInput from './SearchInput/SearchInput';
import Notifications from './Notifications/Notifications';
import User from './User/User';

class Header extends Component {

  render() {
    return (
      <header className="s-header">
        <SearchInput/>
        <div className="header-icons">
          <Notifications/>
          <User/>
        </div>
      </header>
    );
  }
}

export default Header;
