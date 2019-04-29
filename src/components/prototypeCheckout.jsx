import React, { Component } from 'react';

class PrototypeCheckout extends Component {
    state = {
        orderNumbers: []
    };

    generateOrderNumber = () =>
    {
        const tempOrderNumbers = this.state.orderNumbers;
        while(true)
        {
            var uniqueNumber = new Date().getTime().toString(); // creates a 13 digit number
            uniqueNumber += uniqueNumber + Math.floor(Math.random() * 10); // adds an extra digit
            if(!tempOrderNumbers)
            {
                tempOrderNumbers.push(uniqueNumber);
                this.setState({orderNumbers: tempOrderNumbers})
                return uniqueNumber;
            }
            if(!tempOrderNumbers.includes(uniqueNumber))
            {
                tempOrderNumbers.push(uniqueNumber);
                this.setState({orderNumbers: tempOrderNumbers})
                return uniqueNumber;
            }
            
        }

    }

    checkout = () =>
    {
        var day = new Date().getDate(); 
        var month = new Date().getMonth() + 1; 
        var year = new Date().getFullYear();
        var uniqueNumber = this.generateOrderNumber();
        const products = this.props.cart;
        let tempProducts = [...products];
        let x;
        for(x in tempProducts)
        {
            tempProducts[x] = {
                ...tempProducts[x],
                orderNum: [uniqueNumber.slice(0,4), uniqueNumber.slice(4,10), uniqueNumber.slice(10,14)].join("-"),
                dateOfPurchase: year + "/" + month + "/" + day
            }
        }
        const history = this.props.history;
        if(!history || !history.length){
            this.props.appendToHistory(tempProducts)
        }
        else{
            let appended = tempProducts.concat(history);
            this.props.appendToHistory(appended);
        }
        this.props.clearCart();
    }
    render(){
        return(
            <button type="button" onClick={()=>this.checkout()} className="btn btn-primary btn-lg">Checkout</button>
        );
    }
}

export default PrototypeCheckout;