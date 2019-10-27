import React, { Component } from 'react';
import SearchBox from '../searchBox/SearchBox';
import FilterOptions from '../filterOptions/FilterOptions';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar__controls">
                    <SearchBox 
                        searchTerm={this.props.searchTerm}
                        handleSearch={this.props.handleSearch}
                        getBooks={this.props.getBooks}/>
                    <FilterOptions 
                        filters={this.props.filters}
                        handleFilterChange={this.props.handleFilterChange}/>
                </div>
            </div>
        );
    }
}