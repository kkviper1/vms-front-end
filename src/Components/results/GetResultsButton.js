import React  from 'react';
import {Link} from 'react-router-dom';
const GetResultsButton = () =>{
    return(

        <React.Fragment>
            <Link to="/voting/results" className="btn btn-lg btn-success">
                View Results
            </Link>
        </React.Fragment>        
    );
}

export default GetResultsButton;