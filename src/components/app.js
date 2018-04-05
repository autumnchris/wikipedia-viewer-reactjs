import React, { Component } from 'react';
import ResultsList from './results-list';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`)
    .then((wikiData) => {
      this.setState({ searchResults: wikiData.data.query.search });
    }).catch((error) => {
      this.setState({ errorMessage: ' Unable to load Wikipedia search results.' });
      document.querySelector('.alert').style.display = 'block';
    });
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
          <form className="center-block" role="search" onSubmit={this.handleSubmit}>
            <div className="form-group has-feedback">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="search" className="form-control search-input" aria-label="Search for a Wikipedia article..." placeholder="Search for a Wikipedia article..." onChange={this.handleChange} value={this.state.searchInput} required />
            </div>
          </form>
          <p className="text-center">...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">random Wikipedia article</a></p>
          <ResultsList results={this.state.searchResults} />
          <div className="alert alert-warning text-center"><span className="fa fa-warning fa-lg fa-fw"></span>{this.state.errorMessage}</div>
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
