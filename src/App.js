import React, { Component } from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import Products from './components/products';
import History from './components/history';
import ShoppingCart from './components/shoppingCart';
import HomePage from './components/homePage';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
     <main className="container">
     <NavBar/>
     <Switch>
       <Route path ="/home" component={HomePage}></Route>
       <Route path ="/aisles" component={Products}></Route>
       <Route path ="/history" component={History}></Route>
       <Route path ="/cart" component={ShoppingCart}></Route>
       <Route path ="/not-found" component={NotFound}></Route>
       <Redirect from="/" exact to="/home"/>
       <Redirect to="/not-found"/>
     </Switch>
     </main>
     </React.Fragment>
    );
  }
}

export default App;
