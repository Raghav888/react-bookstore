import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "I Came Upon a Lighthouse",
    author: "Shantanu Naidu",
    price: "400",
    productImage: "./assets/lighthouse.jpg",
    productDescription: `I Came Upon a Lighthouse is an honest, light-hearted telling of this uncommon bond between a millennial and an octogenarian that gives glimpses of a beloved Indian icon in a warm light.`,
    categoryName: "autobiography",
  },
  {
    _id: uuid(),
    title: "Zero to One",
    author: "Peter Thiel",
    price: "300",
    productImage: "./assets/zero1.jpg",
    productDescription: `The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One we can find singular ways to create those new things.`,
    categoryName: "finance",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];
