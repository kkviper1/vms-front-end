import React from 'react'
import AddCandidateButton from './AddCandidateButton';
import GetCandidateButton from './GetCandidateButton';
import DeleteCandidateButton from './DeleteCandidateButton';
import ViewVoterButton from '../Voter/Dashboard/ViewVoterButton'


class CandidateItemComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
                 
             
             <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>VIEW Candidate </b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to view the details of candidates in the table</p>
                        </div>
                        <div className="col-md-2">
                            <GetCandidateButton />
                        </div>
                        </div>
                </div>
                

                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>View Voters</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to view the voter details</p>
                        </div>
                        <div className="col-md-2">
                            <ViewVoterButton />
                        </div>

                    </div>
                </div>

                
         </div>
        
        )
    }
}

export default CandidateItemComponent;