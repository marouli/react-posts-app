import React, {Component} from 'react';
import './SideNavFlyout.css';

class SideNavFlyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    }
  }
  /*async componentDidMount() {
    const response = await fetch("/api/sidenav/items?category=Channels");
    const items = await response.json();

    this.setState({
      isLoading: false,
      items
    });
  }*/

  render() {
    let visibility = this.props.visibility ? "show" : "hide";
    return (
      <ul
        onClick={this.props.onClick}
        className={`nav-flyout ${visibility}`}>
        {this.props.children}
      </ul>
    );
  }
}

export default SideNavFlyout;