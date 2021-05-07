import { GET_VOTER } from "../actions/type";

const initialState = {
    voter: {}
}

export default function foo(state=initialState,action) {
    switch(action.type){
        case GET_VOTER:
            return{
                ...state,
                voter:action.payload
            }
        default:
            return state
    }
}