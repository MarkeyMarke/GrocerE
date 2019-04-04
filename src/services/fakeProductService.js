import * as aislesAPI from "./fakeAisleService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    productName: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 6,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    productName: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 5,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181c",
    productName: "Lucky Charms",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181d",
    productName: "Fruity Pebbles",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 17,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    productName: "Cocoa Puffs",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 34,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    productName: "Reese's Puffs",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 9,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181g",
    productName: "Trix",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 8,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181h",
    productName: "Frosted Mini-Wheats Bite Size",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 15,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181i",
    productName: "Golden Grahams",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 25,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181j",
    productName: "Cap'n Crunch",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 22,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181k",
    productName: "Cinnamon Toast Crunch",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 9,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181l",
    productName: "Honey Nut Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 15,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181m",
    productName: "Cocoa Pebbles",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 15,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    productName: "Bananas - 1 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 20,
    basePrice: 0.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182b",
    productName: "Avocados Hass Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 25,
    basePrice: 2.4,
    salePrice: 1.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    productName: "Strawberries - 16 oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 35,
    basePrice: 4.99,
    salePrice: 3.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182d",
    productName: "Clementines - 3 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 45,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182e",
    productName: "Green Seedless Grapes - 2 lbs",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 15,
    basePrice: 2.28,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182f",
    productName: "Peaches Yellow",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 25,
    basePrice: 2.3,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182g",
    productName: "Apples Fuji Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 25,
    basePrice: 1.45,
    salePrice: 0.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182h",
    productName: "Apples Honeycrisp",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 27,
    basePrice: 2.3,
    salePrice: 1.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182i",
    productName: "Apples Granny Smith Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 11,
    basePrice: 0.92,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182j",
    productName: "Watermelon Mini Seedless - Each",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 10,
    basePrice: 5.69,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182k",
    productName: "Kale Green Organic",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 20,
    basePrice: 2.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182l",
    productName: "Signature Farms Kale Cut Super Greens - 10 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 12,
    basePrice: 2.9,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182m",
    productName: "Eggplant Organic",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 7,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182n",
    productName: "Signature Farms Oranges Navel Prepacked - 8 Lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 10,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182o",
    productName: "Lemons Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 15,
    basePrice: 1.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183a",
    productName: "CLIF Energy Bar Crunchy Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 15,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183b",
    productName: "Ensure Nutrition Shake Original Milk Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 23,
    basePrice: 10.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183c",
    productName: "CLIF Energy Bar White Chocolate Macadamia Nut - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 19,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183d",
    productName: "CLIF Energy Bar Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 25,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183e",
    productName: "CLIF Energy Bar Chcoolate Chip - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 40,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183f",
    productName: "Core Power Milk Shake High Protein Chocolate - 11.5 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 40,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183g",
    productName: "Core Power Milk Shake High Protein Vanilla - 11.5 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 40,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183h",
    productName: "MUSCLE MILK Protein Shake Non Dairy Chocolate - 4-11 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 12,
    basePrice: 6.74,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183i",
    productName:
      "Muscle Milk Vanilla Creme Dietary Supplement Protein Shake - 4-11 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 13,
    basePrice: 6.74,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183j",
    productName:
      "MUSCLE MILK 100 Calorie Protein Shake Non Dairy Vanilla Creme - 4-11 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 11,
    basePrice: 6.74,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183k",
    productName:
      "MUSCLE MILK Pro Series Protein Shake Non Dairy Knockout Chocolate - 4-11 Fl. Oz. ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 7,
    basePrice: 7.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183l",
    productName:
      "Flintstones Childrens Multivitamins Supplement Chewable Tablets Complete - 150 Count ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 20,
    basePrice: 15.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183m",
    productName:
      "Flintstones Childrens Multivitamins Supplement Chewable Tablets Complete - 60 Count ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 14,
    basePrice: 13.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183n",
    productName:
      "One A Day Mens Multivitamin/Multimineral Tablets Mens Health Formula - 100 Count ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 12,
    basePrice: 12.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183o",
    productName: "One A Day Multivitamin Womens Prenatal 1 Pill - 30 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 4,
    basePrice: 15.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184a",
    productName:
      "Charmin Ultra Soft Bathroom Tissue Mega Rolls 2 Ply - 12 Roll",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 35,
    basePrice: 20.09,
    salePrice: 17.63,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184b",
    productName: "Bounty Paper Towels Full Sheets Big Roll 2 Ply - 12 Roll",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 37,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184c",
    productName:
      "Angel Soft Bathroom Tissue Double Rolls 2 Ply Unscented - 12 Roll",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 29,
    basePrice: 9.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184d",
    productName:
      "Kleenex Facial Tissue 2-Ply White Trusted Care Bundle Pack Wrapper - 4-160 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184e",
    productName: "Scott Bathroom Tissue 1 Ply Unscented - 20 Roll",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 22,
    basePrice: 19.19,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184f",
    productName: "Signature Home Gloves Flock Lined Medium - Each",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 11,
    basePrice: 3.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184g",
    productName:
      "Signature Home Drop In Toilet Bowl Twin Pack Cleaner - 2 Count ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 12,
    basePrice: 1.63,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184h",
    productName:
      "Signature Home Brightly Paper Towels Lint Free Shine Big Roll 2 Ply Wrap ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 33,
    basePrice: 5.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184i",
    productName:
      "Signature Home Paper Towels Thirsty Strong & Absorbent Vari-A-Size",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 9.99,
    salePrice: 7.49,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184j",
    productName:
      "Signature Home Paper Towels Brightly Lint-Free Shine Giant Roll 2-Ply ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 11,
    basePrice: 4.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184k",
    productName:
      "Signature Home Paper Towels Thirsty Strong & Absorbent Big Roll 84",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 13,
    basePrice: 5.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184l",
    productName:
      "Signature Home Facial Tissue Softly Soft Touch 2-Ply White Box - 80",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 1.97,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184m",
    productName:
      "Signature Home Dishwashing Liquid Ocean Lemon Bottle - 24 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 1.79,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184n",
    productName:
      "Signature Home Bathroom Tissue Soft & Absorbent 2-Ply Family Pack Bag - 30 Roll",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 20,
    basePrice: 18.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184o",
    productName: "Signature Home Furniture Polish Lemon Scented - 12.5 Oz ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 5.19,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185a",
    productName:
      "GoGo squeeZ Applesauce On The Go Apple Apple Pouches - 12-3.2 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 22,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185b",
    productName: "Campbells Soup Condensed Chicken Noodle - 10.75 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 21,
    basePrice: 1.79,
    salePrice: 1.25,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185c",
    productName: "Progresso Traditional Soup Chicken Noodle - 19 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 25,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185d",
    productName: "Thick-It Puree Canned Foods Chicken Patty - Each",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 35,
    basePrice: 12.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185e",
    productName: "Sheltons Chicken Breast Canned Canned Food 5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 37,
    basePrice: 4.15,
    salePrice: 3.67,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185f",
    productName: "KEYKSTONE Canned Chicken Meat 14.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 46,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185g",
    productName:
      "Whole Earth Farms Grain Free Chicken & Turkey Canned Dog Food, 12.7 Oz., Case ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 29.88,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185h",
    productName:
      "Swanson Chicken Breast Premium Chunk White with Rib Meat - 12.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 37,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185i",
    productName: "Bumble Bee Tuna Albacore Solid White in Water - 12 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 47,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185j",
    productName: "Rosarita Beans Refried Traditional Can - 16 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 30,
    basePrice: 1.8,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185k",
    productName: "O Organics Organic Canned Vegetable Pumpkin - 15 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 15,
    basePrice: 3.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185l",
    productName: "Signature Kitchens Canned Coconut Milk Light - 13.5 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 1.55,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185m",
    productName:
      "Signature Kitchens Tomatoes Diced & Green Chilies Southwestern Style Can - 10 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 1.3,
    salePrice: 0.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185n",
    productName: "CENTO San Marzano Tomatoes Organic Whole Peeled Can - 28 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 7.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185o",
    productName: "Hormel Chili No Beans Can - 15 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 3.39,
    salePrice: 1.75,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185p",
    productName:
      "BUSHS BEST Organic Beans Garbanzo Chick Peas Low Sodium Can - 15 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 2.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185q",
    productName: "Campbells Well Yes! Soup Chicken Noodle Can - 16.2 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 3.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185r",
    productName: "BUSHS BEST Organic Beans Black Low Sodium Can - 15 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 2.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185s",
    productName: "Signature SELECT Beans Green Whole Can - 14.5 Oz ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471828", name: "Canned Foods" },
    numberInStock: 33,
    basePrice: 1.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186a",
    productName: "Frito Lay Snacks Flavor Mix Bag - 18-1 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 27,
    basePrice: 8.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186b",
    productName: "Cheez-It Crackers Baked Snack - 12.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 87,
    basePrice: 5.69,
    salePrice: 4.97,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186c",
    productName: "The Snack Artist Cashews Whole Roasted & Salted - 36.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 75,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186d",
    productName: "Blue Diamond Almonds Whole Natural - 16 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 37,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186e",
    productName:
      "Pepperidge Farm Goldfish Crackers Baked Snack Cheddar Carton Bulk - 30 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 23,
    basePrice: 9.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186f",
    productName:
      "M&Ms Chocolate Candies Milk Chocolate Family Size Resealable - 19.20 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 11,
    basePrice: 5.99,
    salePrice: 3.89,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186g",
    productName: "M&Ms Chocolate Candies Minis Milk Chocolate - 10.1 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 13,
    basePrice: 5.69,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186h",
    productName: "Pringles Potato Crisps The Original - 5.2 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 33,
    basePrice: 2,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186i",
    productName: "Pringles Potato Crisps BBQ Tube - 5.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 33,
    basePrice: 2,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186j",
    productName: "Pringles Crisps Sour Cream & Onion Mega Stack - 7.1 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 11,
    basePrice: 2.5,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186k",
    productName: "Pringles Potato Crisps Cheddar Cheese - 5.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 33,
    basePrice: 2,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186l",
    productName: "Signature Kitchens Candy Peach Rings - 7 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 15,
    basePrice: 2.29,
    salePrice: 1.87,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186m",
    productName: "Black Forest Gummy Worms - 4.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 12,
    basePrice: 1.8,
    salePrice: 1.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186n",
    productName: "Tootsie Roll Candy Midgees - 12 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 11,
    basePrice: 2.5,
    salePrice: 1.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186o",
    productName: "KIT KAT Crisp Wafers in Milk Chocolate Full Size - 6-1.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 10,
    basePrice: 6.89,
    salePrice: 5.47,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187a",
    productName: "Best Foods Real Mayonnaise - 30 Fl. Oz.",
    aisle: {
      _id: "5b21ca3eeb7f6fbccd471836",
      name: "Condiments, Spices, and Baking"
    },
    numberInStock: 32,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187b",
    productName: "Heinz Ketchup Tomato - 32 Oz",
    aisle: {
      _id: "5b21ca3eeb7f6fbccd471836",
      name: "Condiments, Spices, and Baking"
    },
    numberInStock: 65,
    basePrice: 4.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187c",
    productName: "C&H Sugar Granulated White Pure Cane - 4 Lb",
    aisle: {
      _id: "5b21ca3eeb7f6fbccd471836",
      name: "Condiments, Spices, and Baking"
    },
    numberInStock: 29,
    basePrice: 3.59,
    salePrice: 1.88,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187d",
    productName: "O Organics Organic Syrup 100% Pure Maple - 8.5 Fl. Oz.",
    aisle: {
      _id: "5b21ca3eeb7f6fbccd471836",
      name: "Condiments, Spices, and Baking"
    },
    numberInStock: 54,
    basePrice: 9.09,
    salePrice: 7.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187e",
    productName: "Star Olive Oil Extra Virgin - 17 Fl. Oz.",
    aisle: {
      _id: "5b21ca3eeb7f6fbccd471836",
      name: "Condiments, Spices, and Baking"
    },
    numberInStock: 20,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188a",
    productName: "ARROWHEAD Mountain Spring Water - 24-16.9 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 220,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188b",
    productName: "Coke Diet Soda - 20-12 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 45,
    basePrice: 7.99,
    salePrice: 7.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188c",
    productName: "LaCroix Sparkling Water Grapefruit Cans - 12-12 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 6.89,
    salePrice: 6.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188d",
    productName: "Coca-Cola Classic Soda - 20-12 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 38,
    basePrice: 7.19,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188e",
    productName: "Aquafina Purified Drinking Water - 24-16.9 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 4.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189a",
    productName:
      "Huggies Baby Wipes Natural Care Fragrance Free Refill - 168 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 27,
    basePrice: 7.99,
    salePrice: 7.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189b",
    productName: "Huggies Natural Care Wipes Fragrance Free Refill - 184 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 47,
    basePrice: 7.99,
    salePrice: 7.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189c",
    productName: "PediaSure Grow & Gain Shake Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 23,
    basePrice: 11.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189d",
    productName: "Gerber 2nd Foods Baby Food Turkey & Turkey Gravy - 2.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 38,
    basePrice: 1.59,
    salePrice: 1.43,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189e",
    productName:
      "Pedialyte AdvancedCare Electrolyte Solution Oral Cherry Punch - 1 Quart",
    aisle: { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 48,
    basePrice: 7.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190a",
    productName: "Ice Cubed Party Ice - 20 Lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 33,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190b",
    productName: "Jimmy Dean Sandwiches Croissant Sausage Egg & Cheese - 36 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 55,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190c",
    productName: "Signature Kitchens Blueberries Whole - 48 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 34,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190d",
    productName:
      "Freschetta Frozen Pizza Naturally Rising Crust Signature Pepperoni - 27.16 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 82,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190e",
    productName:
      "Drumstick Frozen Dairy Dessert Cones Vanilla 8 Cones - 36.8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 29,
    basePrice: 6.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191a",
    productName:
      "Svenhard's Swedish Bakery Breakfast Claws - 8 Count, 16 Oz Tray",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 17,
    basePrice: 6.79,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191b",
    productName: "Quaker Breakfast Squares - 20ct",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 15,
    basePrice: 13.99,
    salePrice: 9.79,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191c",
    productName:
      "Lettieri's 6 Oz. Sausage, Egg, And Cheese Breakfast Sandwich - 12/Case",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 13,
    basePrice: 23.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191d",
    productName: 'Bakery Chef 3" Premium Buttermilk Biscuit - 12/Case',
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 35,
    basePrice: 4.56,
    salePrice: 3.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191e",
    productName: "Belvita Dark Chocolate Creme Breakfast Sandwich, 15 Ct.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 15,
    basePrice: 11.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191f",
    productName: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 7,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191g",
    productName: "Oreos",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191h",
    productName: "Newtons",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 7,
    basePrice: 5.99,
    salePrice: 4.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192a",
    productName:
      "Pacific Natural Foods Organic Coconut Non-Dairy Beverage - Original | 32 Fl Oz ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 15,
    basePrice: 2.58,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192b",
    productName: "Ensure Nutrition Shake Original Milk Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 23,
    basePrice: 10.99,
    salePrice: 8.79,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192c",
    productName:
      "Nestle Carnation Malted Original Milk Powder - 40 Oz Canister",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 13,
    basePrice: 11.79,
    salePrice: 9.43,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192d",
    productName: "Horizon Organic Lowfat Milk | 9ct | Vanilla",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 24,
    basePrice: 8.99,
    salePrice: 7.19,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192e",
    productName: "NESTLE NIDO Fortificada Dry Milk 56.3 Oz. Canister",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 40,
    basePrice: 16.19,
    salePrice: 12.95,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192f",
    productName: "O Organics Organic Eggs Large Brown - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 8,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192g",
    productName: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 7,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192h",
    productName: "Value Corner Eggs Large Family Pack - 18 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 4,
    basePrice: 4.59,
    salePrice: 0,
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
