import * as aislesAPI from "./fakeAisleService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Cheerios",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 6,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Frosted Flakes",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 5,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "O Organics Organic Eggs Large Brown - 12 Count",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 8,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Chips Ahoy!",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice:0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Oreos",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Newtons",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 5.99,
    salePrice: 5.49,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Egglands Best Eggs Large - 12 Count",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 7,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Value Corner Eggs Large Family Pack - 18 Count",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 4,
    basePrice: 4.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Lucky Charms",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.50,
    currentPrice:0
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
  productInDb.genre = aislesAPI.aisles.find(g => g._id === product.aisleId);
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