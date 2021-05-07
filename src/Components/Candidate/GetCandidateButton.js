import React  from 'react';
import {Link} from 'react-router-dom';
const GetCandidateButton = () =>{
    return(

        <React.Fragment>
            <Link to="/getCandidate" className="btn btn-lg btn-success">
                View
            </Link>
        </React.Fragment>        
    );
}

export default GetCandidateButton;