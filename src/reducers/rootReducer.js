import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import products from "./products";
import productsPage from "./productsPage";
import singlePage from "./singlePage";
import basket from "./basket";
import categories from "./categories";

export default history => combineReducers({
  products,
  productsPage,
  singlePage,
  basket,
  categories,
  router: connectRouter(history)
})