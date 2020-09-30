import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducer";
import thunk from "redux-thunk";
export default createStore(reducers, applyMiddleware(thunk));
