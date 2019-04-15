import { fire } from "./firebase";
import React, { Component } from "react";

class firebaseDB {
  getCart(theUser) {
    var items = [];
    const moviesRef = fire
      .database()
      .ref(theUser + "/cart")
      .orderByKey();
    moviesRef.once("value", snap => {
      snap.forEach(child => {
        items.push(child.val());
      });
    });
    return items;
  }

  saveCart(theCartToSave, theUser) {
    var ref = fire;
    var moviesRef = ref.database().ref(theUser + "/cart");
    moviesRef.set(theCartToSave);
  }
}

export default firebaseDB;
