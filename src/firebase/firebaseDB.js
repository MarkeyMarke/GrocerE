import { fire } from "./firebase";
import React, { Component } from "react";

class firebaseDB {
  state = {
    cart: []
  };

  getCart() {
    var items = [];
    var users = "UniqueID";
    const moviesRef = fire
      .database()
      .ref(users + "/cart")
      .orderByKey();
    moviesRef
      .once("value", snap => {
        snap.forEach(child => {
          this.setState({ cart: items });
          items.push(child.val());
        });
      })
      .then(() => {
        console.log(items);
        this.setState({ cart: items });
      });
  }

  saveCart() {
    var cartToSave = ["this", "is", "a", "test"]; //someone need to give this
    var users = "UniqueID"; //someone need to give this
    var ref = fire;
    var moviesRef = ref.database().ref(users + "/cart");
    moviesRef.set(cartToSave);
  }
}

export default firebaseDB;
