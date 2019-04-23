import { fire } from "./firebase";

export function getCart(theUser) {
  var items = [];

  const itemsRef = fire
    .database()
    .ref(theUser + "/cart")
    .orderByKey();

  return itemsRef
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
  var itemsRef = ref.database().ref(theUser + "/cart");
  itemsRef.set(theCartToSave);
}

export function getHistory(theUser) {
  var items = [];

  const historyRef = fire
    .database()
    .ref(theUser + "/history")
    .orderByKey();

  return historyRef
    .once("value", snap => {
      snap.forEach(child => {
        items.push(child.val());
      });
    })
    .then(() => {
      return items;
    });
}

export function saveHistory(theHistoryToSave, theUser) {
  var ref = fire;
  var historyRef = ref.database().ref(theUser + "/history");
  historyRef.set(theHistoryToSave);
}

export function getItems() {
  var items = [];

  const inventRef = fire
    .database()
    .ref("Inventory")
    .orderByKey();

  return inventRef
    .once("value", snap => {
      snap.forEach(child => {
        items.push(child.val());
      });
    })
    .then(() => {
      return items;
    });
}

export function saveItems(theInventToSave) {
  var ref = fire;
  var inventRef = ref.database().ref("Inventory");
  inventRef.set(theInventToSave);
}
