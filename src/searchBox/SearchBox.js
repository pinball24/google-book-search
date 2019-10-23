import React, { Component } from 'react';

export default class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <label htmlFor="search">Search:</label>
                <input placeholder="Search_term" />
            </div>
        )
    }
}