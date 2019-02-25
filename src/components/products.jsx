import React, {Component } from "react";
import ProductsTable from './productsTable'
import ListGroup from '../common/listGroup';
import Pagination from '../common/pagination';
import {getProducts, getProduct} from '../services/fakeProductService';
import {paginate} from '../utils/paginate';
import { getAisles } from "../services/fakeAisleService";
import _ from 'lodash';
class Products extends Component {
    state = { 
        products: [],
        aisles: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order: "asc"}
    };

    componentDidMount() {
        const aisles = [{ _id: '', name: 'All Aisles'}, ...getAisles()];
        this.setState({products: getProducts(), aisles});
    }

    handleDelete = (product) => {
        //const products = this.state.products.filter(m => m._id !== product._id);
        //this.setState({products});
        console.log("added to cart");
    };

    handleLike = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index]};
        products[index].liked = !products[index].liked;
        this.setState({products});
    };

    handlePriceChange = (product) => {
        const salePrice = getProduct(product._id).salePrice;
        const basePrice = getProduct(product._id).basePrice;
        if(salePrice === 0) {
        getProduct(product._id).currentPrice = basePrice;
        return <span> {basePrice} </span>
        }
        getProduct(product._id).currentPrice = salePrice;
        return <p> <span style={{textDecoration:"line-through"}}>{basePrice}</span> {salePrice}</p>
    }

    handlePageChange = page =>{
        this.setState({currentPage: page});
    }

    handleAisleSelect = aisle => {
        this.setState({selectedAisle: aisle, currentPage:1})
    };

    handleSort = sortColumn => {
        this.setState({sortColumn});
    };

    getPagedData = () => {
        const {pageSize, currentPage,sortColumn, selectedAisle, products: allProducts} = this.state;
        const filtered = selectedAisle && selectedAisle._id
        ? allProducts.filter(m => m.genre._id === selectedAisle._id) 
        : allProducts;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const products = paginate(sorted, currentPage, pageSize);
        return {totalCount: filtered.length, data: products};
    }

    render(){
        const { length: count} = this.state.products;
        const {pageSize, currentPage,sortColumn} = this.state;
        if(count ===0 ) return <p>There are no products in the database.</p>;

        const {totalCount, data: products} = this.getPagedData();

        return(
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    items={this.state.aisles} 
                    selectedItem = {this.state.selectedAisle}
                    onItemSelect={this.handleAisleSelect} />
                </div>
                <div className="col">
                    <p>Showing {totalCount} products in the database. </p>
                    <ProductsTable 
                        products={products}
                        sortColumn={sortColumn}
                        setPrice = {this.handlePriceChange} 
                        onLike={this.handleLike} 
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize = {pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );   
    }
}

export default Products;