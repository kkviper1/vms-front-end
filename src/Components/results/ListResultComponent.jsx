import React, { Component } from 'react'
import ResultService from '../../Services/ResultService'

class ListResultComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                results: []
        }
    }
    componentDidMount(){
        ResultService.getResults().then((res) => {
            this.setState({ results : res.data});
        });
        
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{color: "red"}}>Result List</h2>
                <br></br>
                <div className = "container">
                    <table className = "table table-bordered table-striped table-hover table-lg">

                        <thead className="thead-dark">
                            <tr>
                            <th> Candidate ID</th>
                                <th> Candidate Name</th>
                                <th> Candidate Constituency</th>
                                <th> Candidate Party</th>
                                <th> No Of Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.results.map(
                                    result => 
                                    <tr key = {result.candidateId}>
                                            <td> {result.candidateId}</td>
                                            <td> {result.name} </td>   
                                            <td> {result.constituency}</td>
                                            <td> {result.party}</td>
                                            <td> {result.noOfVotes}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListResultComponent
