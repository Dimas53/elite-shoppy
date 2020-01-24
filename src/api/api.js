import products from "./mockProducts";
// import {reject} from "ramda";

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const loadMoreProducts = ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}