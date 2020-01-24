import * as R from "ramda";

export const getProductsById = (state, id) => R.prop(id, state.products)

export const getProducts = state => {
  const products = R.map(id => getProductsById(state, id), state.productsPage.ids)
  return products
}

export const getRenderedProductsLength = state => R.length(state.productsPage.ids)
  
