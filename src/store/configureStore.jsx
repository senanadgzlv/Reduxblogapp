import { combineReducers, createStore } from 'redux';
import blogReducer from "../reducer/Reducerblog"



 export default()=>{
 const store=createStore(
        combineReducers({
      meqale:blogReducer,
        })
      )

      return store;
 }