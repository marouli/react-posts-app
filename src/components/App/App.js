import React, { Component } from 'react';
import './App.css';
import SideNav from "../SideNav/SideNav";
import SearchInput from "../SearchInput/SearchInput";

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideNav/>
        <SearchInput/>
      </div>
    );
  }
}

export default App;
