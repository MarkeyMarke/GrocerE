import React, {Component } from 'react';
import { getProduct } from '../services/fakeProductService';

class ProductDescription extends Component{

    render(){
        const productId = this.props.match.params.id;
        const product = getProduct(productId);
        return(
            <h1>{product.productName}</h1>
        );
    }

}

export default ProductDescription;