import axios from 'axios';
import {GET_ERRORS, GET_VOTER, POST_VOTER} from './Type'

export const createVoter=(voter, history)=> async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/v1/saveVoter",voter);
        history.push('/login');
        dispatch({
            type:POST_VOTER,
            payload:res.data
        })
    }
    catch(error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getVoter=(id)=>async dispatch=> {

    const res = await axios.get(`http://localhost:8080/api/voters/getVoter/${id}`)
    dispatch({
        type:GET_VOTER,
        payload:res.data
    })
}