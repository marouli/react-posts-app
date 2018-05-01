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
      <form>
        <div className="searchInput__container">
          <input
            className="searchInput__input"
            type="search"
            placeholder="Search..."
            value={this.state.filterText}
            onChange={this.handleChange}
          />
          <span className="search__icon">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </form>
    )
  }
}

export default SearchInput;