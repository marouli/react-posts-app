import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    // let visibility = this.props.visibility ? "show" : "hide";
    let menus = this.props.menus;
    let childrenMenus = menus.filter(menu => menu.parentId === this.props.data.id);
    return (
      <ul>
        <li><a href="#">{this.props.data.label}</a></li>
        {childrenMenus.map(menu =>
          <Menu
            key={menu.id}
            data={menu}
            menus={menus}
          />)}
      </ul>
    );
  }
}

export default Menu;