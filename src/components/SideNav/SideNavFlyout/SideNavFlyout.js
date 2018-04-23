import React, {Component} from 'react';
import './SideNavFlyout.css';

class SideNavFlyout extends Component {
  /*async componentDidMount() {
    const response = await fetch("/api/sidenav/items?category=Channels");
    const items = await response.json();

    this.setState({
      isLoading: false,
      items
    });
  }*/

  render() {
    const channelsList = ['Stamkracht', 'Qollap', 'Brandfighters', 'Beebox', 'Dasboard'];
    const portalList = ['General', 'Administratie', 'Development & Productie', 'Service'];
    const channelsListItems = channelsList.map((item, i) => <li key={i}>{item}</li>);
    const portalListItems = portalList.map((item, i) => <li key={i}>{item}</li>);

    const visibility = this.props.visibility ? "show" : "hide";

    return (
      <ul id="sideNavFlyout"
          onClick={this.props.onClick}
          className={visibility}>
          {channelsListItems}
          {this.props.children}
      </ul>
    );
  }
}

export default SideNavFlyout;