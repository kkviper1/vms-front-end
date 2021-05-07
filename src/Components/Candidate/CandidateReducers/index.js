import {combineReducers} from 'redux';
//import errorReducer from './errorReducer';
import candidatesReducer from './candidatesReducer'
export default combineReducers({
   
   candidates:candidatesReducer
});