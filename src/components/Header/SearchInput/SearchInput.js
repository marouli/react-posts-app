import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterText: e.target.value
    })
  }

  render() {
    return (
      <form className="c-search">
        <input
          className="c-search__input"
          type="search"
          placeholder="Search..."
          value={this.state.filterText}
          onChange={this.handleChange}
        />
        <span className="c-search__icon">
          <i className="fa fa-search"></i>
          </span>
      </form>
    )
  }
}

export default SearchInput;