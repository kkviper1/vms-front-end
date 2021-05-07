import axios from 'axios';
const VOTING_API_BASE_URL= "http://localhost:8080/api/v1"
class VotingService {
    getVoting(){
        return axios.get(VOTING_API_BASE_URL +"/voting/all");
    }
    Vote(candidateId){
        return axios.put(VOTING_API_BASE_URL +"/voting/"+candidateId);
    }
    VoterStatus(voterId){
        return axios.put(VOTING_API_BASE_URL +"/UpdateVotingStatus/"+voterId);
    }
    viewVoters(){
        return axios.get(VOTING_API_BASE_URL +"/voters");
    }
}

export default new VotingService()
