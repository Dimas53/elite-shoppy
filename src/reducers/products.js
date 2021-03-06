import * as R from "ramda";

import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS
} from "../actions/actionTypes";


const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)
    case FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    default:
      return state
  }

}