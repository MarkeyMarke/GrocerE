import React, {Component} from 'react';
import Like from '../common/like';
import Table from '../common/table';

class ProductsTable extends Component {
    columns = [
        {path: 'title', label: 'Tile'},
        {path: 'genre.name', label: 'Aisle'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'currentPrice', label: 'Price', content: product => (
            this.props.setPrice(product)
        )},
        {key: "like", content: product => (<Like liked={product.liked} onClick={() => this.props.onLike(product)}/>) },
        {key: "delete", content: product => (
            <button 
            onClick= {() => this.props.onDelete(product)} 
            className="btn btn-outline-danger">
            Add to Cart
            </button>
        )}
    ];
    render() { 
        const {products, onSort, sortColumn } = this.props;
        return (
            <Table 
            columns={this.columns} 
            data={products} 
            sortColumn={sortColumn} 
            onSort={onSort}
            />
        );
    }
}
 

export default ProductsTable;