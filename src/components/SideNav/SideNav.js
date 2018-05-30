import React, {Component} from 'react';
import './SideNav.css';
import SideNavFlyout from "./SideNavFlyout/SideNavFlyout";

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
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  openMenu() {
    this.setState((oldState, props) => ({
      menuClassName: 'open'
    }));
  }

  closeMenu() {
    this.setState((oldState, props) => ({
      menuClassName: 'close'
    }));
  }

  render() {
    let sideNavClassName = "c-side-nav";
    let slideClassName = "c-side-nav__slide";
    let btnClassName = "c-side-nav-closebtn";
    if (this.state.menuClassName === 'open') {
      sideNavClassName += "-open";
      slideClassName += "-open";
      btnClassName += "-open";
    } else {
      slideClassName += "-close";
      btnClassName += "-close";
    }
    return (
      <nav className={sideNavClassName}>
        <a href="#" className="c-side-nav-menu-icon" onClick={this.openMenu}>&#9776; MENU</a>
        <img src='./img/sk.png' className="c-side-nav__logo" alt="logo"/>
        <div className={slideClassName}>
          <a href="#" className={btnClassName} onClick={this.closeMenu}>&times;</a>
          <ul className="c-side-nav__ul">
            <li><a href="#">Activitystream</a></li>
            <li><a onClick={this.handleChannelsClick} href="#">Channels</a>
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
            <li><a onClick={this.handlePortalClick} href="#">Portal</a>
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