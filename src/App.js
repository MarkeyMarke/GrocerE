import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Products from "./components/products";
import History from "./components/history";
import ShoppingCart from "./components/shoppingCart";
import HomePage from "./components/homePage";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";
import Login from "./components/login";

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar loggedIn={this.state.loggedIn} />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/aisles" component={Products} />
            <Route path="/history" component={History} />
            <Route path="/cart" component={ShoppingCart} />
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
