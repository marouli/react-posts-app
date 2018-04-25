import React, {Component} from 'react';
import './User.css';

import Icon from '../common/Icon/Icon';

class User extends Component {
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
      <Icon faClassName="user" />
    );
  }
}

export default User;