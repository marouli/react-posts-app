import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <form className="searchInput__box">
        <div className="searchInput__container">
          <input
            type="search"
            id="search"
            placeholder='Search...'
            ref={input => this.search = input}
            onChange = {this.handleInputChange}
          />
          <span class="search__icon">
            <i class="fa fa-search"></i>
          </span>
        </div>
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default SearchInput;