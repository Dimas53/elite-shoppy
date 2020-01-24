import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import products from "./products";
import productsPage from "./productsPage";

export default history => combineReducers({
  products,
  productsPage,
  router: connectRouter(history)
})