import React, { Component } from 'react';
import ResultsList from './results-list';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      errorMessage: '',
      spinnerStyle: {display: 'none'},
      errorStyle: {display: 'none'}
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
    this.setState({
      searchResults: [],
      spinnerStyle: {display: 'block'},
      errorStyle: {display: 'none'}
    });
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`)
    .then((wikiData) => {
      this.setState({
        searchResults: wikiData.data.query.search,
        spinnerStyle: {display: 'none'}
      });

      if (this.state.searchResults.length === 0) {
        this.setState({
          errorMessage: ` Unable to find results for \"${this.state.searchInput}\". Consider revising your search.`,
          errorStyle: {display: 'block'}
        });
      }
    }).catch((error) => {
      this.setState({
        errorMessage: ' Unable to load Wikipedia search results.',
        spinnerStyle: {display: 'none'},
        errorStyle: {display: 'block'}
      });
    });
  }

  render() {
    return (
      <div className="body">
        {/* HEADER */}
        <header>
          <h1>Wikipedia Viewer</h1>
        </header>
        <main>
          <div className="fab fa-wikipedia-w fa-4x"></div>
          {/* SEARCH FORM */}
          <form role="search" onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <span className="fas fa-search"></span>
              <input type="search" className="search-input" aria-label="Search for a Wikipedia article..." placeholder="Search for a Wikipedia article..." onChange={(event) => this.handleChange(event)} value={this.state.searchInput} required />
            </div>
          </form>
          <p>...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">random Wikipedia article</a></p>
          {/* LOADING SPINNER */}
          <div className="spinner" style={this.state.spinnerStyle}>
            <span className="fa fa-sync-alt fa-spin fa-2x fa-fw" aria-label="Loading..."></span>
          </div>
          {/* RESULTS */}
          <ResultsList results={this.state.searchResults} />
          <p className="message error-message" style={this.state.errorStyle}><span className="fa fa-exclamation-circle fa-lg fa-fw"></span>{this.state.errorMessage}</p>
        </main>
        {/* FOOTER */}
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </div>
    );
  }
}
