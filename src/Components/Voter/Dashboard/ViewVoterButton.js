import React  from 'react';
import {Link} from 'react-router-dom';
const ViewVoterButton = () =>{
    return(

        <React.Fragment>
            <Link to="/getVoters" className="btn btn-lg btn-success">
                View
            </Link>
        </React.Fragment>        
    );
}

export default ViewVoterButton;