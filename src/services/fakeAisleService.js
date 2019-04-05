export const aisles = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
  { _id: "5b21ca3eeb7f6fbccd471837", name: "Canned Foods" },
  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
  { _id: "5b21ca3eeb7f6fbccd471869", name: "Frozen Foods" },
  { _id: "5b21ca3eeb7f6fbccd471830", name: "Bakery and Breakfast" },
  { _id: "5b21ca3eeb7f6fbccd471832", name: "Dairy, Eggs, and Cheese" }
];

export function getAisles() {
  return aisles.filter(g => g);
}
