import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class FilterableList extends Component {
    render() {
        const list = this.props.books.map((book, key) => <ListItem book={book} key={key}/>)


        return (
            <div className="filterableList">
                {list}
            </div>
        )
    }
}

FilterableList.defaultProps = {
    books: []
};