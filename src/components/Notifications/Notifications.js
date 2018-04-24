import React, {Component} from 'react';
import './Notifications.css';

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
        <div className="notification__container">
          <span class="notification__icon">
            <i class="fa fa-bell"></i>
          </span>
        </div>
    )
  }
}

export default Notifications;