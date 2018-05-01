import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
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
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
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