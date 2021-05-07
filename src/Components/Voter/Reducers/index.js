import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import voterReducer from './voterReducer';

export default combineReducers({
    errors:errorReducer,
    voter:voterReducer
})