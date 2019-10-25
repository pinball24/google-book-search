import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import SearchBar from './searchBar/SearchBar';
import FilterableList from './filterableList/FilterableList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'henry',
      books: [],
      filters: {
        printType: 'all',
        bookType: ''
      }
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  getBooks() {
    const key = 'AIzaSyD0-VzbtzihqtPLCc9xZF_keDNQ-DMy2ls'
    console.log(key);
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    console.log(baseUrl);
    let url = `${baseUrl}?key=${key}&q=${this.state.searchTerm}`
    console.log(url);

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filters={this.state.filters}
          handleSearch={term => this.updateSearchTerm(term)}
          getBooks={this.getBooks}/>
        <FilterableList 
          searchTerm={this.state.searchTerm}
          filters={this.state.filters}/>
      </div>
    )
  }
}