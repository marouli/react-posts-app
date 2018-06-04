import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    let menus = this.props.menus;
    let childrenMenus = menus.filter(menu => menu.parentId === this.props.data.id);
    let submenu = "";
    if (childrenMenus.length !== 0) {
      submenu =
        <ul className="c-menu-submenu--hide">
        {childrenMenus.map(menu =>
          <li>
            <Menu
              key={menu.id}
              data={menu}
              menus={menus}/>
          </li>)}
        </ul>
      }
    return (
      <React.Fragment>
        <a href="#">{this.props.data.label}</a>
        {submenu}
      </React.Fragment>
    );
  }
}

export default Menu;