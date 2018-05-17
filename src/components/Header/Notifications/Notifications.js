import React, {Component} from 'react';
import Icon from '../../common/Icon/Icon';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  handleClick() {
    this.setState({
    })
  }

  render() {
    return (
      <Icon faClassName="bell" />
    );
  }
}

export default Notifications;