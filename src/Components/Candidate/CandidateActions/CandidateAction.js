import axios from 'axios';
import { GET_ERROR,GET_CANDIDATES,DELETE_CANDIDATE } from './type';
export const createCandidate=(candidate,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:8080/api/v1/candidate/add",candidate)
       // history.push("/dashboard");
        alert("Created successfully")
       // history.push("/addCandidate");
       history.push("/getCandidate");
    } catch (err) {
        dispatch({
            type:GET_ERROR,
            payload:err.response.data
        })
    }
}
export const getCandidates=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/api/v1/candidate/all");
    dispatch({
        type:GET_CANDIDATES,
        payload:res.data
    })
}

export const deleteCandidate=(candidateId,history)=>async dispatch=>{
    try{
        if(window.confirm("Are you sure ? This will delete the candidate and the data related to it")) {
        await axios.delete(`http://localhost:8080/api/v1/candidate/{candidateId}`);
        history.push("/")
        dispatch({
            type:DELETE_CANDIDATE,
            payload:candidateId
        })
     }}
     catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error.response.data
        })
    }

  }