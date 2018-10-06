import React, { Component } from 'react';
import Api from '../../config/api';


export default class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await Api.get('/products');

        this.setState({ products: response.data.docs });
    };

    render() {
        return (
            <div>
                {this.state.products.map(products => (
                    <h1 key={products._id}>{products.title}</h1>
                ))}
            </div>
        )
    }
}