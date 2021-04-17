import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { loginReducer } from "./loginReducer";
import { roomsReducer } from "./roomsReducer";
import {getIdByEmailReducer} from './getIdByEmailReducer'
import {reviewsReducer} from './ReviewsReducer'
import {getCheckOut} from './getCheckOut';

//ACA SE AGREGA CADA REDUCER QUE UTILICEN
export const rootReducer = combineReducers({
  //ej: ui: uiReducer, <- importamos el reducer
  categories: categoriesReducer,
  login: loginReducer,
  rooms: roomsReducer,
  idByMail: getIdByEmailReducer,  
  reviews:reviewsReducer,
  getCheckOut
});
