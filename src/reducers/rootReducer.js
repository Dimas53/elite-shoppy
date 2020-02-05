import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import products from "./products";
import productsPage from "./productsPage";
import singlePage from "./singlePage";
import basket from "./basket";

export default history => combineReducers({
  products,
  productsPage,
  singlePage,
  basket,
  router: connectRouter(history)
})