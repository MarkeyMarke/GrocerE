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
import firebase from "firebase";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";

class App extends Component {
  state = {
    redirect: false,
    authenticated: false,
    loading: true,
    cart: []
  };

  handleCartChange = item => {
    console.log("Added to cart");
    const cartTemp = this.state.cart;
    cartTemp.push(item);
    this.setState({ cart: cartTemp });
    console.log(this.state.cart);
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
            loading: false
          }))
        : this.setState(() => ({
            authenticated: false,
            loading: false
          }));
    });
  }

  render() {
    if (this.state.loading === true)
      return (
        <React.Fragment>
          <LoadingOverlay
            active={true}
            spinner={<FadeLoader sizeUnit={"px"} size={90} color={"#123abc"} />}
            text="Loading your content..."
          />
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <main className="container">
          <NavBar
            cart={this.state.cart}
            authenticated={this.state.authenticated}
            clearCart={this.clearCart}
            setState={p => {
              this.setState(p);
            }}
          />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              path="/aisles/:id"
              render={routerProps => (
                <ProductDescription
                  {...routerProps}
                  cart={this.state.cart}
                  onAddToCart={this.handleCartChange}
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
            <Route path="/register" render={() => <Register />} />
            <Route
              path="/login"
              render={() => (
                <Login
                  redirect={this.state.redirect}
                  setState={p => {
                    this.setState(p);
                  }}
                />
              )}
            />
            <Route path="/recovery" render={() => <PasswordRecovery />} />
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
