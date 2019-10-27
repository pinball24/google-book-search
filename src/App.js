import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import SearchBar from './searchBar/SearchBar';
import FilterableList from './filterableList/FilterableList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      books: null,
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

  updateFilterOption(print, type) {
    this.setState({
      filters: {...this.state.filters, printType: print, bookType: type}
    })
  }

  getBooks = () => {
    const key = 'AIzaSyDXWqspP09ukXy-DwC1nROuYPVIXKC9CiQ'
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    let url = `${baseUrl}?q=${this.state.searchTerm}&key=${key}`

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
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
          handleFilterChange={print => this.updateFilterOption(print)}
          getBooks={this.getBooks}/>
        <FilterableList 
          searchTerm={this.state.searchTerm}
          filters={this.state.filters}
          books={this.state.books}/>
      </div>
    )
  }
}