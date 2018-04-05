import React, { Component } from 'react';

export default class App extends Component {

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
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
