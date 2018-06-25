import React, {Component} from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  toggleVisibility() {
    this.setState((oldState, props) => ({
      isVisible: !oldState.isVisible
    }));
  }

  handleClick() {
    this.toggleVisibility();
  }

  handleHover() {
    this.setState((oldState, props) => ({
      isVisible: true
    }));
  }

  handleLeave() {
    this.setState((oldState, props) => ({
      isVisible: false
    }));
  }

  render() {
    let menus = this.props.menus;
    let childrenMenus = menus.filter(menu => menu.parentId === this.props.data.id);
    let visibility = "hide";
    if (this.state.isVisible)
      visibility = "show";

    let submenu = "";
    if (childrenMenus.length !== 0) {
      submenu =
        <ul className={`c-menu-submenu ${visibility}`}>
        {childrenMenus.map(menu =>
            <MenuItem
              key={menu.id}
              data={menu}
              menus={menus}
            />)}
        </ul>
      }
    return (
      <React.Fragment>
        <li onClick={this.handleClick}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}>
          <a href="#">{this.props.data.label}</a>
          {submenu}
        </li>
      </React.Fragment>
    );
  }
}

export default MenuItem;