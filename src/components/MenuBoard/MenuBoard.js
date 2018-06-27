import React, {Component} from 'react';
import './MenuBoard.css';
import MenuItem from './MenuItem/MenuItem';

class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      isVisible: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleVisibility() {
    this.setState((oldState, props) => ({
      isVisible: !oldState.isVisible
    }));
  }

  handleClick() {
    this.toggleVisibility();
  }

  componentDidMount() {
    fetch('http://localhost:3004/menu')
      .then(response => response.json())
      .then(menus => this.setState({menus: menus})
      )
  }

  render() {
    let menus = this.state.menus;
    let parentMenus = menus.filter(menu => menu.parentId === null);
    parentMenus.sort(function(menu1, menu2) {
      // Ascending: sortId less first
      return menu1.sortId - menu2.sortId;
    });
    let visibility = "hide";
    if (this.state.isVisible)
      visibility = "show";

    let menu =
      <nav className={`s-menu__nav ${visibility}`} role="navigation">
        <ul className={`s-menu__ul ${visibility}`}>
        {parentMenus.map(menu =>
            <MenuItem
            key={menu.id}
            data={menu}
            menus={menus}
            />)}
        </ul>
      </nav>

    return (
      <main className="s-menu">
        <div className={`s-menu__slider ${visibility}`}>
          <a href="#" className={`s-menu-closebtn ${visibility}`} onClick={this.handleClick}>&times;</a>
          {menu}
        </div>
        <header>
          <a href="#" className="s-menu__hamburger-icon" onClick={this.handleClick}>&#9776; MENU</a>
          <img src='./img/sk.png' className="s-menu__logo" alt="logo"/>
        </header>
        {menu}
      </main>
    )
  }
}

export default MenuBoard;