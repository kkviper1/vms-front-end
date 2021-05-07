import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCandidate } from '../Candidate/CandidateActions/CandidateAction';
class DeleteCandidate extends Component {

    constructor(props) {
        super(props);

        this.state={
            candidates:[]
        }
    }

    componentDidMount(){
        this.props.deleteCandidate();
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const deleteCandidate = {
            candidateId:this.state.candidateId
            
        }
        console.log(this.state.candidateId);
        this.props.deleteCandidate(this.state.candidateId,this.props.history);

    }
    render() {
        return (
            <div className="candidate">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Delete Candidate details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Unique Candidate ID" 
                                    name="candidateId" 
                                    onChange={this.onChange}
                                    value={this.state.candidateId}
                                    />
                            </div>
                           
                            
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

DeleteCandidate.propTypes = {
    deleteCandidate:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{deleteCandidate})(DeleteCandidate);