import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_START,
  LOAD_MORE_PRODUCTS_FAILURE
} from "./actionTypes";
import {
  fetchProducts as fetchProductsApi,
  loadMoreProducts as loadMoreProductsApi
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