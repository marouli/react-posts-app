import React from 'react';
import './SideNavFlyout.css';

function SideNavFlyout(props) {
  /*async componentDidMount() {
    const response = await fetch("/api/sidenav/items?category=Channels");
    const items = await response.json();

    this.setState({
      isLoading: false,
      items
    });
  }*/
  // const channelsList = ['Stamkracht', 'Qollap', 'Brandfighters', 'Beebox', 'Dasboard'];
  // const portalList = ['General', 'Administratie', 'Development & Productie', 'Service'];
  // const channelsListItems = channelsList.map((item, i) => <li key={i}>{item}</li>);
  // const portalListItems = portalList.map((item, i) => <li key={i}>{item}</li>);

  const visibility = props.visibility ? "show" : "hide";
  console.log('props:', props);
  return (
    <ul
      onClick={props.onClick}
      className={`sideNavFlyout ${visibility}`}>
      {props.children}
    </ul>
  );
  }

export default SideNavFlyout;