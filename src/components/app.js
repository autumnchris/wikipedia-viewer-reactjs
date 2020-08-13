import React from 'react';
import SearchForm from './search-form';
import LoadingSpinner from './loading-spinner';
import ResultsContainer from './results-container';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      isSubmitted: false,
      isLoading: false,
      searchError: false,
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
    this.setState({
      searchResults: [],
      isSubmitted: true,
      isLoading: true
    });

    if (!this.state.searchInput) {
      this.setState({
        isLoading: false,
        searchError: true,
        errorMessage: 'A text input must be submitted to get search results.'
      });
    }
    else {
      axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`)
      .then(wikiData => {
        this.setState({
          searchResults: wikiData.data.query.search,
          isLoading: false,
          searchError: false,
          errorMessage: ''
        });
        
        if (this.state.searchResults.length === 0) {
          this.setState({
            searchError: true,
            errorMessage: `Unable to find results for \"${this.state.searchInput}\". Consider revising your search.`
          });
        }
      }).catch(error => {
        this.setState({
          isLoading: false,
          searchError: true,
          errorMessage: 'Unable to load Wikipedia search results at this time.'
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Wikipedia Viewer</h1>
        </header>
        <main>
          <div className="fab fa-wikipedia-w fa-4x"></div>
          <SearchForm searchInput={this.state.searchInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          {this.state.isLoading ? <LoadingSpinner /> : null}
          {this.state.isSubmitted && !this.state.isLoading ? <ResultsContainer searchResults={this.state.searchResults} searchError={this.state.searchError} errorMessage={this.state.errorMessage} /> : null}
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </React.Fragment>
    );
  }
}

export default App;
