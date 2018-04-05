import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: []
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="text-left">
          <h1>Wikipedia Viewer</h1>
        </header>
        <main>
          <div className="text-center">
            <span className="fa fa-wikipedia-w fa-4x"></span>
          </div>
          <form className="center-block" role="search">
            <div className="form-group has-feedback">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="search" className="form-control search-input" aria-label="Search for a Wikipedia article..." placeholder="Search for a Wikipedia article..." required />
            </div>
          </form>
          <p className="text-center">...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">random Wikipedia article</a></p>
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
