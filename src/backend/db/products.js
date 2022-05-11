import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "4800",
    categoryName: "men",
    ratings: 3,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "2500",
    categoryName: "women",
    ratings: 4,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1500",
    categoryName: "kids",
    ratings: 2,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "2400",
    categoryName: "newborn",
    ratings: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "2800",
    categoryName: "men",
    ratings: 4,
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "3600",
    categoryName: "women",
    ratings: 3,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "4200",
    categoryName: "kids",
    ratings: 2,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "4500",
    categoryName: "newborn",
    ratings: 1,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "3500",
    categoryName: "men",
    ratings: 5,
    inStock: true,
    fastDelivery: false,
  },
];
