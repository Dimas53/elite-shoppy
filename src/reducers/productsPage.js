import * as R from "ramda";

import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      })
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const ids = R.pluck('id', payload)
      return R.merge(state, {
        ids: R.concat(state.ids, ids)
      })
    default:
      return state
  }
}