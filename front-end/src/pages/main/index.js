import React, { Component } from 'react';
import Api from '../../config/api';


export default class Main extends Component {
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await Api.get('/products');

        console.log(response.data.docs);
    };

    render() {
        return <h1>Hello World!!</h1>
    }
}