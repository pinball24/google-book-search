import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import SearchBar from './searchBar/SearchBar';
import FilterableList from './filterableList/FilterableList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const key = 'AIzaSyA3-NFqGyuqFXMmStPr_qSpsjx7gcOGXgc'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=henry&key=AIzaSyA3-NFqGyuqFXMmStPr_qSpsjx7gcOGXgc';

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => console.log(data))

  }
  
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