import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Products from "./components/products";
import History from "./components/history";
import ProductDescription from './components/productDescription';
import ShoppingCart from "./components/shoppingCart";
import HomePage from "./components/homePage";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";
import Login from "./components/login";

class App extends Component {
  state = {
    loggedIn: false,
    cart: []
  };

  handleCartChange = item => {
    console.log("Added to cart");
    const cartTemp = this.state.cart;
    cartTemp.push(item);
    this.setState({ cart: cartTemp });
    console.log(this.state.cart);
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar loggedIn={this.state.loggedIn} cart={this.state.cart} />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route 
              path = "/aisles/:id" 
              render = {(routerProps)=> (
                <ProductDescription
                  {...routerProps}
                  cart = {this.state.cart}
                  onAddToCart = {this.handleCartChange}
                /> 
              
              )}
              />
            <Route
              path="/aisles"
              render={() => (
                <Products
                  cart={this.state.cart}
                  onAddToCart={this.handleCartChange}
                />
              )}
            />
            <Route
              path="/history"
              render={() => (
                <History
                  cart={this.state.cart}
                  onAddToCart={this.handleCartChange}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => <ShoppingCart cart={this.state.cart} />}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  loggedIn={this.state.loggedIn}
                  setState={p => {
                    this.setState(p);
                  }}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
