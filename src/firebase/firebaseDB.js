import { fire } from "./firebase";
import React, { Component } from "react";

class firebaseDB {
  getCart(theUser) {
    var items = [];
    users = theUser;
    const moviesRef = fire
      .database()
      .ref(users + "/cart")
      .orderByKey();
    moviesRef.once("value", snap => {
      snap.forEach(child => {
        items.push(child.val());
      });
    });
    return items;
  }

  saveCart(theCartToSave, theUser) {
    cartToSave = theCartToSave; //someone need to give this
    user = theUser; //someone need to give this
    var ref = fire;
    var moviesRef = ref.database().ref(users + "/cart");
    moviesRef.set(cartToSave);
  }
}

export default firebaseDB;
