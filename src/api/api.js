import products from "./mockProducts";
import categories from "./mockCategories"
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

export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}