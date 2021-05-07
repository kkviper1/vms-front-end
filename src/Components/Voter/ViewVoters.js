import React, { Component } from 'react';
import VoterService from '../../Services/VoterService';

class ViewVoters extends Component {
    constructor(props){
        super(props)
        this.state={
            Voters: []
        }
    }
    componentDidMount() {  //calls after the component is mounted and calls restApI
        VoterService.viewVoters().then((res) => {
            this.setState({Voters: res.data});
        });
    }

  
    render() {
        return (
            <div>
                 <h2 className="text-center">Voter List</h2>
                 <div className = "container">
                 <table className = "table table-bordered table-striped table-hover table-lg">
                 <thead>
                     <tr>
                         <th>Voter Id</th>
                         <th>Voter Name</th>
                         <th>Voter Age</th>
                         <th>Voter City</th>
                         <th>Voter Id Proof</th>
                         <th>Voter Phone </th>
                         <th>Email</th>
                         <th>Password</th>
                     </tr>
                 </thead>
                 <tbody>
                        {
                            this.state.Voters.map( //es6 feature 
                                     voting => 
                                    <tr key = {voting.voterID}>
                                        <td> {voting.voterID} </td> {/*each row having unique key*/}
                                         <td> { voting.voterName} </td>   
                                         <td> {voting.voterAge}</td>
                                         <td> {voting.voterCity}</td>
                                         <td> {voting.voterIdProof}</td>
                                         <td> {voting.voterPhone}</td>
                                         <td> {voting.email}</td>
                                         <td> {voting.password}</td>
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

export default ViewVoters;