import React, {Component} from 'react';
import './User.css';

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
      <div className="user__container">
          <span class="user__icon">
            <i class="fa fa-user"></i>
          </span>
      </div>
    )
  }
}

export default Notifications;