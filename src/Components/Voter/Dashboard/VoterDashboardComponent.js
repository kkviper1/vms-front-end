import React from 'react'
import GetResultsButton from '../../results/GetResultsButton';
import CastVoteButton from './CastVoteButton';


class VoterDashboardComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
                 
             
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>Cast Vote</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to give vote in the voting session.</p>
                        </div>
                        <div className="col-md-2">
                            <CastVoteButton />
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

export default VoterDashboardComponent;