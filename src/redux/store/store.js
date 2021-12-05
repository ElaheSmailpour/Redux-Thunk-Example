import CounterReducer from "../reducer/CounterReducer";
import postReducer from "../reducer/postReducer"
import { applyMiddleware, createStore,combineReducers } from "redux"
import thunk from "redux-thunk";


export default createStore(combineReducers({countState:CounterReducer,postState:postReducer}),applyMiddleware(thunk))