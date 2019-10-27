import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class FilterableList extends Component {
    render() {
        console.log(this.props.books);
        if (this.props.books) {
        let list = this.props.books.items.map((book, key) => <ListItem {...book} key={key}/>);
        console.log(list)
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
