import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Components/Candidate/CandidateReducers/CandidateReducer';

const initialState={};
const middleWare=[thunk];

let store;
if (window.navigator.userAgent.includes("Chrome")) {
    store =  createStore(
        rootReducer,
        compose(applyMiddleware(...middleWare),
        window._REDUX_DEVTOOLS_EXTENSION_
        ? window._REDUX_DEVTOOLS_EXTENSION_()
        : f => f));
} else {
    store =  createStore(
        rootReducer,
        compose(applyMiddleware(...middleWare)));
}

export default store;