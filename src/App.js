import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Products from "./components/products";
import History from "./components/history";
import ProductDescription from "./components/productDescription";
import ShoppingCart from "./components/shoppingCart";
import HomePage from "./components/homePage";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import PasswordRecovery from "./components/passwordRecovery";

class App extends Component {
  state = {
    loggedIn: false,
    redirect: false,
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
          <NavBar
            loggedIn={this.state.loggedIn}
            cart={this.state.cart}
            setState={p => {
              this.setState(p);
            }}
          />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/aisles/:id" component={ProductDescription} />
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
              path="/register"
              render={() => (
                <Register
                  loggedIn={this.state.loggedIn}
                  redirect={this.state.redirect}
                  setState={p => {
                    this.setState(p);
                  }}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  loggedIn={this.state.loggedIn}
                  redirect={this.state.redirect}
                  setState={p => {
                    this.setState(p);
                  }}
                />
              )}
            />
            <Route
              path="/recovery"
              render={() => (
                <PasswordRecovery
                  redirect={this.state.redirect}
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
