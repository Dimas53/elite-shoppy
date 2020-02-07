import * as R from "ramda"

import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  INCREMENT_PRODUCT_FROM_BASKET,
  CLEAN_BASKET
} from "../actions/actionTypes";

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PRODUCT_TO_BASKET:
      return R.append(payload, state)
    case REMOVE_PRODUCT_FROM_BASKET:
      return R.without(R.of(payload), state)
    case INCREMENT_PRODUCT_FROM_BASKET:
      // const moreValues = R.inc(R.prop('count'), payload)
      return R.sum(R.append(payload, state))
    case CLEAN_BASKET:
      return initialState

    default:
      return state
  }
}