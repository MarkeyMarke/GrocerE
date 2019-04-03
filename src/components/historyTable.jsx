import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from '../common/table';

class HistoryTable extends Component {
    columns = [
        {path: 'productName', label: 'Product', content: product =>
         <Link to={`/aisles/${product._id}`}>{product.productName}</Link>
        },
        {path: 'aisle.name', label: 'Aisle'},
        {path: 'currentPrice', label: 'Price', content: product => (
            this.props.setPrice(product)
        )},
        {path: 'orderNum', label: 'Order Number'},
        {path: "dateOfPurchase", label: "Date of Purchase" },
        {key: "delete", content: product => (
           this.props.getButton(product)
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