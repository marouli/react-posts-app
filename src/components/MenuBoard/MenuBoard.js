import React, {Component} from 'react';
import './MenuBoard.css';
import Menu from './Menu/Menu';

class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    }
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
    return (
      <nav className="s-menu">
        <img src='./img/sk.png' className="s-menu__logo" alt="logo"/>
        {parentMenus.map(menu =>
          <Menu
            key={menu.id}
            data={menu}
            menus={menus}
          />)}
      </nav>
    )
  }
}

export default MenuBoard;