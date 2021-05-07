import React from 'react'
import AddCandidateButton from '../../Candidate/AddCandidateButton';
import RegisterVoterButton from './RegisterVoterButton';


class RegisterDasboardComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
                 
             
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>Register as a Candidate</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to nominate yourself for the election.</p>
                        </div>
                        <div className="col-md-2">
                            <AddCandidateButton />
                        </div>

                    </div>
                </div>

                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>Register as a Voter</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to register as a voter.</p>
                        </div>
                        <div className="col-md-2">
                            <RegisterVoterButton />
                        </div>

                    </div>
                </div>

                
         </div>
        
        )
    }
}

export default RegisterDasboardComponent;