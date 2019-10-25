import React, { Component } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <form className="search_form">
                    <label htmlFor="search">Search:</label>
                    <input 
                        placeholder="Search term"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleSearch(e.target.value)}/>

                    <div className="search_button">
                        <button 
                            type="button"
                            value={this.props.searchTerm}
                            onClick={e => this.props.getBooks}>
                                Search
                        </button> 
                    </div>
                </form>
            </div>
        )
    }
}