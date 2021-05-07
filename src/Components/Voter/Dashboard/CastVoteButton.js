import React  from 'react';
import {Link} from 'react-router-dom';
const CastVoteButton = () =>{
    return(

        <React.Fragment>
            <Link to="/voting" className="btn btn-lg btn-success">
                Cast Vote
            </Link>
        </React.Fragment>        
    );
}

export default CastVoteButton;