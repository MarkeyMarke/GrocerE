import * as aislesAPI from "./fakeAisleService";

const history = [
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    productName: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    orderNum: 12345678,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0,
    dateOfPurchase: "Feb 10, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    productName: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    orderNum: 51234890,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0,
    dateOfPurchase: "Feb 17, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192g",
    productName: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    orderNum: 51234908,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0,
    dateOfPurchase: "Mar 17, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191f",
    productName: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    orderNum: 51234910,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice: 0,
    dateOfPurchase: "Mar 17, 2019"
  }
];

export function getHistory() {
  return history;
}

export function getHistoryItem(id) {
  return history.find(m => m._id === id);
}

export function saveHistoryItem(product) {
  let productInDb = history.find(m => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.genre = aislesAPI.aisles.find(g => g._id === product.aisleId);
  productInDb.numberInStock = product.numberInStock;
  productInDb.dailyRentalRate = product.dailyRentalRate;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    history.push(productInDb);
  }

  return productInDb;
}

export function deleteHistoryItem(id) {
  let productInDb = history.find(m => m._id === id);
  history.splice(history.indexOf(productInDb), 1);
  return productInDb;
}
