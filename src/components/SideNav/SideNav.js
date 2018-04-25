import React, {Component} from 'react';
import './SideNav.css';
import SideNavFlyout from "./SideNavFlyout/SideNavFlyout";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlyoutVisible: false,
      hover: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleFlyout = this.toggleFlyout.bind(this);
  }

  toggleFlyout() {
    this.setState((oldState, props) => ({
      isFlyoutVisible: !oldState.isFlyoutVisible
    }));
  }

  handleClick(e) {
    this.toggleFlyout();
  }

  render() {
    return (
      <nav className="sideNav">
        <div>
          <img src='./img/sk.png' className="sideNav__logo" alt="logo"/>
          <ul className="sideNav__ul">
            <li><a href="#">Activitystream</a></li>
            <li><a onClick={this.handleClick} href="#">Channels ></a>
              <SideNavFlyout
                onClick={this.handleClick}
                visibility={this.state.isFlyoutVisible}/>
            </li>
            <li><a href="#">Colleagues</a></li>
            <li><a href="#">Q&A</a></li>
            <li><a onClick={this.handleClick} href="#">Portal ></a></li>
          </ul>

          {/*<SideNavFlyout
            onClick={this.handleClick}
            visibility={this.state.isFlyoutVisible}
            children={[
              <li>Stamkracht</li>,
              <li>Qollap</li>,
              <li>Brandfighters</li>
            ]}
          />*/}
        </div>
      </nav>
    );
  }
}

export default SideNav;