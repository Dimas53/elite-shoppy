import * as R from "ramda"

import {ADD_PRODUCT_TO_BASKET} from "../actions/actionTypes";

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PRODUCT_TO_BASKET:
      return R.append(payload, state)
    default:
      return state
  }
}