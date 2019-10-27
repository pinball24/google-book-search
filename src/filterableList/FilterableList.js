import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class FilterableList extends Component {
    render() {
        console.log(this.props.books);
        if (this.props.books && this.props.books.length > 0) {
        let list = this.props.books.map((book, key) => <ListItem {...book} key={key}/>)
        } else {
            return 'There are no books to display'
        };

        return (
            <div className="filterableList">
            
            </div>
        )
    }
}

FilterableList.defaultProps = {
    books: []
};