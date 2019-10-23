import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import SearchBar from './searchBar/SearchBar';
import FilterableList from './filterableList/FilterableList';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <FilterableList />
      </div>
    )
  }
}