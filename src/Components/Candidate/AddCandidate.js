import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createCandidate } from '../Candidate/CandidateActions/CandidateAction';
class AddCandidate extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            gender:"",
            age:"",
            emailId:"",
            phoneNumber:"",
            constituency:"",
            password:"",
            party:"",
            errors: {}
    };
        //this.onChange=this.onChange.bind(this);
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.candidateId===""){
            alert("Candidate Id cannot be blank");
        }
        else
        {
        const newCandidate = {
           
            name:this.state.name,
            gender:this.state.gender,
            age:this.state.age,
            emailId:this.state.emailId,
            phoneNumber:this.state.phoneNumber,
            constituency:this.state.constituency,
            password:this.state.password,
            party:this.state.party
        }

        this.props.createCandidate(newCandidate,this.props.history);
        this.setState({name:"", gender:"",age:"",emailId:"",phoneNumber:"",constituency:"",password:"",party:""});
    }
}
    render() {
        const { errors } = this.state;
        return (
            <div className="candidate">
            <div className="container">
                <div className="row">
                <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Candidate form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            
                            

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.name})} 
                                    placeholder="Candidate's Name" 
                                    name="name" 
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.name}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.gender})} 
                                    placeholder="Candidate's Gender" 
                                    name="gender" 
                                    onChange={this.onChange}
                                    value={this.state.gender}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.gender}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.age})} 
                                    placeholder="Candidate's Age" 
                                    name="age" 
                                    onChange={this.onChange}
                                    value={this.state.age}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.age}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.emailId})} 
                                    placeholder="Candidate EmailId" 
                                    name="emailId" 
                                    onChange={this.onChange}
                                    value={this.state.emailId}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.emailId}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.phoneNumber})} 
                                    placeholder="Candidate Phone number" 
                                    name="phoneNumber" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.phoneNumber}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.constituency})} 
                                    placeholder="Candidate's Constituency" 
                                    name="constituency" 
                                    onChange={this.onChange}
                                    value={this.state.constituency}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.constituency}
                                 </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.party})} 
                                    placeholder="Candidate's Party" 
                                    name="party" 
                                    onChange={this.onChange}
                                    value={this.state.party}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.party}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.password})} 
                                    placeholder="Candidate's Password" 
                                    name="password" 
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.password}
                                 </div>
                                    )}
                            </div>
                            
                            
    
                            <input type="submit" className="btn btn-secondary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddCandidate.propTypes = {
    createCandidate:PropTypes.func.isRequired
}

export default connect(null,{createCandidate})(AddCandidate);