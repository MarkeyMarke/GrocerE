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
import { getUID } from "./firebase/firebaseAuth.js";
import { getCart } from "./firebase/firebaseDB.js";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./common/footer";
import AboutUs from "./components/aboutUs";
import Terms from "./components/terms";

class App extends Component {
  state = {
    redirect: false,
    authenticated: false,
    loading: true,
    cart: []
  };

  handleCartChange = item => {
    var tempItem = { ...item, quantity: 1 };
    console.log("Added to cart");
    const cartTemp = this.state.cart;
    cartTemp.push(tempItem);
    this.setState({ cart: cartTemp });
    console.log(this.state.cart);
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  setCart = cart => {
    this.setState({ cart });
  };

  // handleDelete = product => {
  //   const cartTemp = this.state.cart.filter(c => c.id !== product);
  //   this.setState({ cart: cartTemp });
  // };

  handleDelete = item => {
    let cartTemp = this.state.cart;
    console.log("cart:", cartTemp);
    var p;
    for (p = 0; p < cartTemp.length; p++) {
      if (cartTemp[p]._id === item._id) {
        cartTemp.splice(p, 1);
        this.setState({ cart: cartTemp });
        console.log(cartTemp[p]);
      }
    }
  };

  addToQuantity = item => {
    const cartTemp = [...this.state.cart];
    const index = cartTemp.indexOf(item);
    if (item["quantity"] === item["numberInStock"]) {
      console.log("There are only ", item["quantity"], " items in stock.");
    } else {
      cartTemp[index] = { ...item };
      cartTemp[index].quantity++;
      this.setState({ cart: cartTemp });
      console.log(cartTemp);
    }
  };

  subtractFromQuantity = item => {
    const cartTemp = [...this.state.cart];
    const index = cartTemp.indexOf(item);
    if (item["quantity"] === 1) {
      console.log("You cannot have 0 items.");
    } else {
      cartTemp[index] = { ...item };
      cartTemp[index].quantity--;
      this.setState({ cart: cartTemp });
      console.log(cartTemp);
    }
  };

  componentDidMount() {
    var tempThis = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var userId = getUID();
        var currentCart = getCart(userId);

        currentCart.then(function(result) {
          tempThis.setCart(result);
          tempThis.setState(() => ({
            authenticated: true,
            loading: false
          }));
        });
      } else {
        tempThis.setState(() => ({
          authenticated: false,
          loading: false
        }));
      }
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
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/terms" component={Terms} />
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
              render={() => (
                <ShoppingCart
                  cart={this.state.cart}
                  onDeleteFromCart={this.handleDelete}
                  onIncrement={this.addToQuantity}
                  onDecrement={this.subtractFromQuantity}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="/register" render={() => <Register />} />
            <Route
              path="/login"
              render={() => (
                <Login
                  redirect={this.state.redirect}
                  setCart={this.setCart}
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
