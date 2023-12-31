const phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    storage: "128GB",
    color: "Phantom Gray",
    price: 799.99,
    screenSize: "6.2 inches",
    releaseYear: 2021,
    quantity: 10,
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    storage: "256GB",
    color: "Midnight Blue",
    price: 999.0,
    screenSize: "6.1 inches",
    releaseYear: 2022,
    quantity: 5,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    storage: "128GB",
    color: "Sorta Sage",
    price: 699.0,
    screenSize: "6.4 inches",
    releaseYear: 2023,
    quantity: 8,
  },
  {
    brand: "OnePlus",
    model: "9 Pro",
    storage: "256GB",
    color: "Morning Mist",
    price: 899.99,
    screenSize: "6.7 inches",
    releaseYear: 2021,
    quantity: 12,
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    storage: "256GB",
    color: "Horizon Blue",
    price: 769.0,
    screenSize: "6.81 inches",
    releaseYear: 2021,
    quantity: 15,
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    storage: "256GB",
    color: "Frosted Black",
    price: 1199.0,
    screenSize: "6.5 inches",
    releaseYear: 2021,
    quantity: 3,
  },
  {
    brand: "Huawei",
    model: "P50 Pro",
    storage: "256GB",
    color: "Golden Black",
    price: 1199.0,
    screenSize: "6.6 inches",
    releaseYear: 2022,
    quantity: 7,
  },
];

function cheapest(phones) {
  let cheapestPhone = phones[0];
  let sum = 0;
  let quantityBasedPrice = 0;
  for (let i = 0; i < phones.length; i++) {
    const singlePhone = phones[i];
    // sum = sum + singlePhone.price;
    quantityBasedPrice = singlePhone.price * singlePhone.quantity;
    sum = sum + quantityBasedPrice;
    // console.log(singlePhone);
    if (singlePhone.price < cheapestPhone.price) {
      cheapestPhone = singlePhone;
    }
  }
  return { cheapestPhone, sum };
}

console.log(cheapest(phones));
