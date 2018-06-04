import React, {Component} from 'react';
import './MenuBoard.css';
import Menu from './Menu/Menu';

class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      isVisible: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((oldState, props) => ({
      isVisible: !oldState.isVisible
    }));
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
    let visibility = this.toggleVisibility ? "--show" : "--hide";
    let nav =
      <nav className="s-menu__nav" role="navigation">
        <ul className="s-menu__ul">
        {parentMenus.map(menu =>
          <li>
            <Menu
            key={menu.id}
            data={menu}
            menus={menus}
            visibility={visibility}
            />
          </li>)}
        </ul>
      </nav>

    return (
      <main className="s-menu">
        <header>
          <a href="#" className="s-menu__menu-icon" onClick={this.toggleVisibility}>&#9776; MENU</a>
          <img src='./img/sk.png' className="s-menu__logo" alt="logo"/>
        </header>
        {nav}
      </main>
    )
  }
}

export default MenuBoard;