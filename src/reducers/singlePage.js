import * as R from "ramda"

import {FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS} from "../actions/actionTypes";

const intialState = {
  id: null
}

export default (state = intialState, {type, payload}) => {
  switch (type) {
    case FETCH_SINGLE_PRODUCT_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload)
      })
    default:
      return state
  }
}