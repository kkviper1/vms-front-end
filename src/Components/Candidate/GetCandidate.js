import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getCandidates} from '../Candidate/CandidateActions/CandidateAction';

class GetCandidateComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            candidates:[]
        }
    }

    componentDidMount(){
        this.props.getCandidates();
    }

    render() {
        const {candidates} =  this.props.candidates;
        return (
            <div class="container">
                <br/>
                <table class="table table-bordered table-striped table-hover table-lg">
                    <tr>
                        <th>Candidate Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>EmailId</th>
                        <th>Phone Number</th>
                        <th>Constituency</th>
                        <th>Password</th>
                        <th>Party</th>
                    </tr>

                    <tbody>
                        {
                            this.props.candidates.map((candidate) => {
                                
                                return (
                                    <tr>
                                        <td>{candidate.candidateId}</td>
                                        <td>{candidate.name}</td>
                                        <td>{candidate.gender}</td>
                                        <td>{candidate.age}</td>
                                        <td>{candidate.emailId}</td>
                                        <td>{candidate.phoneNumber}</td>
                                        <td>{candidate.constituency}</td>
                                        <td>{candidate.password}</td>
                                        <td>{candidate.party}</td>
                            
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

GetCandidateComponent.propTypes={
    getCandidates:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    candidates:state.candidates
});

export default connect(mapStateToProps,{getCandidates})(GetCandidateComponent);