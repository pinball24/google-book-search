import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        console.log(this.props.saleInfo)
        const isForSale = this.props.saleInfo.saleability === "FOR_SALE" || "FOR_SALE_AND_RENTAL"
            ? <li>Price: ${this.props.saleInfo.amount}</li>
            : <li>Price: This book is not for sale</li>
        
        return (
            <div className="ListItem">
                <div className="books__list">
                    <h1>{this.props.volumeInfo.title}</h1>
                    <ul>
                        <li>Author: {this.props.volumeInfo.authors}</li>
                        <li>{isForSale}</li>
                    </ul>
                </div>
            </div>
        )
    }
}