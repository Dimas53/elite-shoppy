import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_START,
  LOAD_MORE_PRODUCTS_FAILURE,
  FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS,
  FETCH_SINGLE_PRODUCT_BY_ID_START,
  FETCH_SINGLE_PRODUCT_BY_ID_FAILURE,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  INCREMENT_PRODUCT_FROM_BASKET,
  CLEAN_BASKET,
  SEARCH_PRODUCT,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_FAILURE
} from "./actionTypes";
import {
  fetchProducts as fetchProductsApi,
  loadMoreProducts as loadMoreProductsApi,
  fetchSingleProductById as fetchSingleProductByIdApi,
  fetchCategories as fetchCategoriesApi
} from "../api/api";
import {getRenderedProductsLength} from "../selectors";


export const fetchProducts = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_START
  })
  
  try {
    const products = await fetchProductsApi()
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    })
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const loadMoreProducts = () => async (dispatch, getState) => {
  const offset = getRenderedProductsLength(getState())
  dispatch({
    type: LOAD_MORE_PRODUCTS_START
  })

  try {
    const products = await loadMoreProductsApi({offset})
    dispatch({
      type: LOAD_MORE_PRODUCTS_SUCCESS,
      payload: products
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PRODUCTS_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const fetchSingleProductById = (id) => async dispatch => {
  dispatch({type:FETCH_SINGLE_PRODUCT_BY_ID_START})
  
  try{
    const singleProduct = await fetchSingleProductByIdApi(id)
    dispatch({
      type:FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS,
      payload: singleProduct
    })
  } catch (err) {
    dispatch({
      type:FETCH_SINGLE_PRODUCT_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const searchProduct = text => dispatch => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text
  })
}


export const addProductToBasket = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_BASKET,
    payload: id
  })
}

export const removeProductFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_BASKET,
    payload: id
  })
}



export const incrementProductFromBasket = id => dispatch => {
  dispatch({
    type: INCREMENT_PRODUCT_FROM_BASKET,
    payload: id
  })
}

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET,
  })
}

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_START
  })

  try {
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}