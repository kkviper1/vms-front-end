import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/results";

class ResultService {

    getResults(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/all");
    }

}

export default new ResultService()