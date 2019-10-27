import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class FilterableList extends Component {
    render() {
        let list;
        if (this.props.books) {
            list = 
                this.props.books &&
                this.props.books.items &&
                this.props.books.items.map((book, key) => (
                    <ListItem {...book} key={key} />
                ));
        } else {
            console.log('There are no books to display')
        };

        return (
            <div className="filterableList">
                {list}
            </div>
        );
    }
}
