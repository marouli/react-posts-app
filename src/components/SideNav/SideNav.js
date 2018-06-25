import React, {Component} from 'react';
import './SideNav.css';
import SideNavFlyout from './SideNavFlyout/SideNavFlyout';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChannelsFlyoutVisible: false,
      isPortalFlyoutVisible: false,
      menuClassName: ''
    };

    this.handleChannelsClick = this.handleChannelsClick.bind(this);
    this.handlePortalClick = this.handlePortalClick.bind(this);
    this.toggleChannelsFlyout = this.toggleChannelsFlyout.bind(this);
    this.togglePortaFlyout = this.togglePortaFlyout.bind(this);
    this.handleChannelsHover = this.handleChannelsHover.bind(this);
    this.handleChannelsLeave = this.handleChannelsLeave.bind(this);
    this.handlePortalHover = this.handlePortalHover.bind(this);
    this.handlePortalLeave = this.handlePortalLeave.bind(this);
    this.openSlideMenu = this.openSlideMenu.bind(this);
    this.closeSlideMenu = this.closeSlideMenu.bind(this);
  }

  toggleChannelsFlyout() {
    this.setState((oldState, props) => ({
      isChannelsFlyoutVisible: !oldState.isChannelsFlyoutVisible
    }));
  }

  togglePortaFlyout() {
    this.setState((oldState, props) => ({
      isPortalFlyoutVisible: !oldState.isPortalFlyoutVisible
    }));
  }

  handleChannelsClick(e) {
    this.toggleChannelsFlyout();
  }

  handlePortalClick(e) {
    this.togglePortaFlyout();
  }

  handleChannelsHover() {
    this.setState((oldState, props) => ({
      isChannelsFlyoutVisible: true
    }));
  }

  handleChannelsLeave() {
    this.setState((oldState, props) => ({
      isChannelsFlyoutVisible: false
    }));
  }

  handlePortalHover() {
    this.setState((oldState, props) => ({
      isPortalFlyoutVisible: true
    }));
  }

  handlePortalLeave() {
    this.setState((oldState, props) => ({
      isPortalFlyoutVisible: false
    }));
  }

  openSlideMenu() {
    this.setState((oldState, props) => ({
      menuClassName: 'open'
    }));
  }

  closeSlideMenu() {
    this.setState((oldState, props) => ({
      menuClassName: ''
    }));
  }

  render() {
    let classOpen = '';
    if (this.state.menuClassName === 'open')
      classOpen += '-open';

    return (
      <nav className={`c-side-nav${classOpen}`}>
        <a href="#" className="c-side-nav-menu-icon" onClick={this.openSlideMenu}>&#9776; MENU</a>
        <img src='./img/sk.png' className="c-side-nav__logo" alt="logo"/>
        <div className={`c-side-nav__slide${classOpen}`}>
          <a href="#" className={`c-side-nav-closebtn${classOpen}`} onClick={this.closeSlideMenu}>&times;</a>
          <ul className="c-side-nav__ul">
            <li><a href="#">Activitystream</a></li>
            <li onMouseLeave={this.handleChannelsLeave} onMouseEnter={this.handleChannelsHover}>
              <a onClick={this.handleChannelsClick} href="#">Channels</a>
              <SideNavFlyout
                onClick={this.handleClick}
                visibility={this.state.isChannelsFlyoutVisible}
                children={[
                  <li>Stamkracht</li>,
                  <li>Qollap</li>,
                  <li>Brandfighters</li>
                ]}
              />
            </li>
            <li><a href="#">Colleagues</a></li>
            <li><a href="#">Q&A</a></li>
            <li onMouseLeave={this.handlePortalLeave} onMouseEnter={this.handlePortalHover}>
              <a onClick={this.handlePortalClick} href="#">Portal</a>
              <SideNavFlyout
                onClick={this.handleClick}
                visibility={this.state.isPortalFlyoutVisible}
                children={[
                  <li>General</li>,
                  <li>Administratie</li>,
                  <li>Development</li>
                ]}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideNav;