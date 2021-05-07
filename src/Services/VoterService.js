import axios from 'axios';
const VOTER_API_BASE_URL= "http://localhost:8080/api/v1"
class VoterService {
    
    viewVoters(){
        return axios.get(VOTER_API_BASE_URL +"/voters");
    }
}

export default new VoterService()
