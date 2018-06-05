import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
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
          <li>
            <Menu
              key={menu.id}
              data={menu}
              menus={menus}
            />
          </li>)}
        </ul>
      }
    return (
      <React.Fragment>
        <a href="#"
           onClick={this.handleClick}
           onMouseEnter={this.handleHover}
           onMouseLeave={this.handleLeave}>{this.props.data.label}</a>
        {submenu}
      </React.Fragment>
    );
  }
}

export default Menu;