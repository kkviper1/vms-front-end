import React  from 'react';
import {Link} from 'react-router-dom';
const RegisterVoterButton = () =>{
    return(

        <React.Fragment>
            <Link to="/registerVoter" className="btn btn-lg btn-success">
                Register
            </Link>
        </React.Fragment>        
    );
}

export default RegisterVoterButton;