import React, { Component } from 'react';
import VotingService from '../../Services/VotingService';

class ListVotingsession extends Component {
    constructor(props){
        super(props)
        this.state={
            Voting: []
        }
    }
    componentDidMount() {  //calls after the component is mounted and calls restApI
        VotingService.getVoting().then((res) => {
            this.setState({Voting: res.data});
        });
    }

    castVote(candidateId){
        let voterId=prompt("Please confirm your voter ID:");
        VotingService.VoterStatus(voterId).then((res)=>{
            if(res.data==='Status Updated'){
                VotingService.Vote(candidateId);
        alert("You have successfully voted!")
        this.props.history.push(`/voter/dashboard`);
            }
            else if(res.data==='Already Voted'){
                alert("You have already voted!")
                this.props.history.push(`/voter/dashboard`);
            }
        })
        // VotingService.Vote(candidateId);
        // alert("You have successfully voted!")
        // this.props.history.push(`/voter/dashboard`);
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Voting Session</h2>
                 <div className = "container">
                 <table className = "table table-bordered table-striped table-hover table-lg">
                 <thead>
                     <tr>
                         <th>Candidate Id</th>
                         <th>Constituency</th>
                         <th>Name</th>
                         <th>Party</th>
                         <th> Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                        {
                            this.state.Voting.map( //es6 feature 
                                     voting => 
                                    <tr key = {voting.candidateId}>
                                        <td> {voting.candidateId} </td> {/*each row having unique key*/}
                                         <td> { voting.constituency} </td>   
                                         <td> {voting.name}</td>
                                         <td> {voting.party}</td>
                                         <td>
                                         <button style={{marginLeft: "10px"}} onClick={ () => this.castVote(voting.candidateId)} className="btn btn-info">Vote</button>
                                         </td>
                                         </tr>
                                      )
                                       }
                                </tbody>
                                </table>
                </div>
            </div>
        );
    }
}

export default ListVotingsession;