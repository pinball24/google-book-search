import React, { Component } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <form className="search_form">
                    <label htmlFor="search">Search:</label>
                    <input placeholder="Search_term" />

                    <div className="search_button">
                        <button type="submit">Search</button> 
                    </div>
                </form>
            </div>
        )
    }
}