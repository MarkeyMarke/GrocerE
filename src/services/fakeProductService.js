import * as aislesAPI from "./fakeAisleService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    productName: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 6,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    productName: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 5,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    productName: "O Organics Organic Eggs Large Brown - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 8,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    productName: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    productName: "Oreos",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    productName: "Newtons",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 5.99,
    salePrice: 5.49,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    productName: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 7,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    productName: "Value Corner Eggs Large Family Pack - 18 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 4,
    basePrice: 4.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    productName: "Lucky Charms",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.5,
    currentPrice: 0
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(m => m._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find(m => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.aisle = aislesAPI.aisles.find(g => g._id === product.aisleId);
  productInDb.numberInStock = product.numberInStock;
  productInDb.dailyRentalRate = product.dailyRentalRate;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find(m => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
