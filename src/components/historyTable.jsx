import React, {Component} from 'react';
import Table from '../common/table';

class HistoryTable extends Component {
    columns = [
        {path: 'productName', label: 'Product'},
        {path: 'aisle.name', label: 'Aisle'},
        {path: 'currentPrice', label: 'Price', content: product => (
            this.props.setPrice(product)
        )},
        {path: 'orderNum', label: 'Order Number'},
        {path: "dateOfPurchase", label: "Date of Purchase" },
        {key: "delete", content: product => (
            <button 
            onClick= {() => this.props.onAdd(product)} 
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
 

export default HistoryTable;