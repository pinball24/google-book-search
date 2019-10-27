import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        let price = this.props.searchInfo;
        return (
            <div className="ListItem">
                <div className="books__list">
                    <h1>{this.props.volumeInfo.title}</h1>
                    <ul>
                        <li>Author: {this.props.volumeInfo.authors}</li>
                        <li>Price: ${this.props.saleInfo.listPrice.amount}</li>
                    </ul>
                </div>
            </div>
        )
    }
}