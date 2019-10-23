import React, { Component } from 'react';
import './FilterOptions.css';

export default class FilterOptions extends Component {
    render() {
        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <form>
                        <label htmlFor="print_type">Print Type:</label>
                        <select id="print_type" name="print_type">
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </form>
                </div>
                <div className="FilterOptions__option">
                    <form>
                        <label htmlFor="book_type">Book Type:</label>
                        <select id="no_filter" name="no_filter">
                            <option value="no_filter">No Filter</option>
                            <option value="ebooks">ebooks</option>
                            <option value="free_ebooks">Free ebooks</option>
                            <option value="paid_ebooks">Paid ebooks</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}