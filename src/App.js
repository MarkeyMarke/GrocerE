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
import { getCart, getHistory } from "./firebase/firebaseDB.js";
import { saveCart } from "./firebase/firebaseDB.js";

import { saveHistory } from "./firebase/firebaseDB.js";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./common/footer";
import AboutUs from "./components/aboutUs";
import Terms from "./components/terms";
import Banner from "./components/header";

class App extends Component {
  state = {
    redirect: false,
    authenticated: false,
    loading: true,
    userLoggedIn: false,
    notRegisterCase: true,
    history: [],
    cart: []
  };

  handleCartChange = item => {
    var tempItem = { ...item, quantity: 1 };
    const cartTemp = this.state.cart;
    cartTemp.push(tempItem);
    this.setState({ cart: cartTemp });
    //Save to Firebase
    const UID = getUID();
    if (UID) {
      saveCart(cartTemp, UID);
    }
  };

  clearCart = () => {
    this.setState({ cart: [] });
    const id = getUID();
    if (id) saveCart([], id);
  };

  handleHistory = items => {
    this.setState({ history: items });
    var user = getUID();
    if (user) saveHistory(items, user);
  };

  setCart = cart => {
    this.setState({ cart });
  };

  handleDelete = item => {
    let cartTemp = this.state.cart;
    var p;
    for (p = 0; p < cartTemp.length; p++) {
      if (cartTemp[p]._id === item._id) {
        cartTemp.splice(p, 1);
        this.setState({ cart: cartTemp });
      }
    }
    //Save to Firebase
    const UID = getUID();
    if (UID) {
      saveCart(cartTemp, UID);
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
    }
    //Update Firebase
    const UID = getUID();
    if (UID) {
      saveCart(cartTemp, UID);
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
    //Update Firebase
    const UID = getUID();
    if (UID) {
      saveCart(cartTemp, UID);
    }
  };

  componentDidMount() {
    var tempThis = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (this.state.notRegisterCase) {
          tempThis.setState({ userLoggedIn: true });
          console.log("Logged in even though I'm not supposed to");

          var userId = getUID();
          var currentCart = getCart(userId);
          var currentHistory = getHistory(userId);

          currentCart.then(function(result) {
            tempThis.setCart(result);
            tempThis.setState(() => ({
              authenticated: true,
              loading: false
            }));

            currentHistory.then(function(result) {
              tempThis.setState(() => ({ history: result }));
            });
          });
        }
      } else {
        tempThis.setState(() => ({
          userLoggedIn: false,
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
        <main>
          <Banner />
          <NavBar
            cart={this.state.cart}
            authenticated={this.state.authenticated}
            clearCart={this.clearCart}
            setState={p => {
              this.setState(p);
            }}
          />
          <div className="container">
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
                    history={this.state.history}
                    userLoggedIn={this.state.userLoggedIn}
                    onAddToCart={this.handleCartChange}
                  />
                )}
              />
              <Route
                path="/cart"
                render={() => (
                  <ShoppingCart
                    onDeleteFromCart={this.handleDelete}
                    onIncrement={this.addToQuantity}
                    onDecrement={this.subtractFromQuantity}
                    onDelete={this.handleDelete}
                    cart={this.state.cart}
                    clearCart={this.clearCart}
                    history={this.state.history}
                    appendToHistory={this.handleHistory}
                  />
                )}
              />
              <Route
                path="/register"
                render={() => (
                  <Register
                    notRegisterCase={this.state.notRegisterCase}
                    cart={this.state.cart}
                    setCart={this.setCart}
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
                    redirect={this.state.redirect}
                    cart={this.state.cart}
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
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
