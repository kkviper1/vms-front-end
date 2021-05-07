import React from 'react'
import GetResultsButton from '../../results/GetResultsButton';
import DeleteCandidateButton from '../DeleteCandidateButton';


class CandidateDasboardComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
                 
             
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>DELETE Candidate</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to delete the candidate details</p>
                        </div>
                        <div className="col-md-2">
                            <DeleteCandidateButton />
                        </div>

                    </div>
                </div>

                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>Election Results</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to view the election results.</p>
                        </div>
                        <div className="col-md-2">
                            <GetResultsButton />
                        </div>

                    </div>
                </div>

                
         </div>
        
        )
    }
}

export default CandidateDasboardComponent;