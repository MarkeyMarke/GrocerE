import * as aislesAPI from "./fakeAisleService";

const history = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    productName: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    orderNum: 12345678,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0,
    dateOfPurchase: "Feb 10, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    productName: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    orderNum: 51234890,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0,
    dateOfPurchase: "Feb 17, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    productName: "O Organics Organic Eggs Large Brown - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    orderNum: 83456789,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0,
    dateOfPurchase: "Feb 11, 2019"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    productName: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    orderNum: 79065432,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice:0,
    dateOfPurchase: "Feb 6, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    productName: "Oreos",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    orderNum: 79876543,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0,
    dateOfPurchase: "Dec 10, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    productName: "Newtons",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    orderNum: 71234567,
    basePrice: 5.99,
    salePrice: 5.49,
    currentPrice: 0,
    dateOfPurchase: "Feb 10, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    productName: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    orderNum: 72345617,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0,
    dateOfPurchase: "Feb 20, 2019"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    productName: "Value Corner Eggs Large Family Pack - 18 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    orderNum: 41234567,
    basePrice: 4.59,
    salePrice: 0,
    currentPrice: 0,
    dateOfPurchase: "Feb 10, 2018"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    productName: "Lucky Charms",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    orderNum: 70987654,
    basePrice: 4.99,
    salePrice: 3.50,
    currentPrice:0,
    dateOfPurchase: "Feb 10, 2017"
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