import React, { Component } from 'react';
import SearchBox from '../searchBox/SearchBox';
import FilterOptions from '../filterOptions/FilterOptions';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar__controls">
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        );
    }
}