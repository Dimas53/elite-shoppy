import * as R from "ramda";

export const getProductsById = (state, id) => R.prop(id, state.products)

export const getProducts = state => {
  const products = R.map(id => getProductsById(state, id), state.productsPage.ids)
  return products
}

export const getRenderedProductsLength = state => R.length(state.productsPage.ids)

export const getTotalBasketCount = state => R.length(state.basket)

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('discount'),
    R.map(id => getProductsById(state, id))
  )(state.basket)

  return totalPrice
}

export const  getBasketProductsWithCount = state => {
  const productCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)
  const productWithCount = product => R.assoc('count', productCount(product.id), product)
  const uniqueIds = R.uniq(state.basket)
  const products = R.compose(
    R.map(productWithCount),
    R.map(id => getProductsById(state, id))
  )(uniqueIds)

  return products
}


export const  plusButton = state => {
  const productCount = id => R.compose(
    R.add(basketId => R.equals(id, basketId)),
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)
  const productWithCount = product => R.assoc('count', productCount(product.id), product)
  const uniqueIds = R.uniq(state.basket)
  const plusButton = R.compose(
    R.map(productWithCount),
    R.map(id => getProductsById(state, id))
  )(uniqueIds)

  return plusButton
}


