import products from "./mockProducts";
import * as R from "ramda";

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const loadMoreProducts = async ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const fetchSingleProductById = async (id) => {
  return new Promise((resolve, reject) => {
    const singleProduct = R.find(R.propEq('id', id), products)
    resolve(singleProduct)
  })
}