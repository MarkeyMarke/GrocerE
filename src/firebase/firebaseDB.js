import { fire } from "./firebase";

export function getCart(theUser) {
  var items = [];

  const moviesRef = fire
    .database()
    .ref(theUser + "/cart")
    .orderByKey();

  return moviesRef
    .once("value", snap => {
      snap.forEach(child => {
        items.push(child.val());
      });
    })
    .then(() => {
      return items;
    });
}

export function saveCart(theCartToSave, theUser) {
  var ref = fire;
  var moviesRef = ref.database().ref(theUser + "/cart");
  moviesRef.set(theCartToSave);
}
