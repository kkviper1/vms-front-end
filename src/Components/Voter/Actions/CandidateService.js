import axios from 'axios';
import React, { Component } from 'react';

const BASE_URL = "http://localhost:8080/api/v1/candidate";

class CandidateService extends Component{
    
    createCandidate(candidate) {
        return axios.post(BASE_URL+"/add", candidate);
    }
    getCandidateById(candidateId) {
        return axios.get(BASE_URL+"/"+candidateId);
    }
    getCandidates() {
        return axios.get(BASE_URL+"/all" );
    }
    updateCandidate(candidate, candidateId) {
        return axios.put(BASE_URL+"/"+candidateId, candidate);
    }
    deleteCandidate(candidateId) {
        return axios.delete(BASE_URL+"/"+candidateId);
    }

}


export default new CandidateService()