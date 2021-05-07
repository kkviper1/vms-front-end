import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createVoter } from './Actions/VoterAction';
import CandidateService from './Actions/CandidateService';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:null,
            sel:1,
            voterName:"",
            voterAge: null,
            voterPhone:"",
            voterCity:"",
            voterIdProof:"",
            email:"",
            password:"",
            errors: {},
            name:"",
            gender:"",
            age:"", 
            phoneNumber:"",
            emailId:"",
            constituency:"",
            party:"",
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.saveCandidate=this.saveCandidate.bind(this);
        this.nameHandler=this.nameHandler.bind(this);
        this.ageHandler=this.ageHandler.bind(this);
        this.genderHandler=this.genderHandler.bind(this);
        this.phoneNumberHandler=this.phoneNumberHandler.bind(this);
        this.emailIdHandler=this.emailIdHandler.bind(this);
        this.constituencyHandler=this.constituencyHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.partyHandler=this.partyHandler.bind(this);

    }  
    
    onChange(event){
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    onSubmit(event) {
        event.preventDefault();
        const newVoter = {
            voterName:this.state.voterName,
            voterAge:this.state.voterAge,
            voterPhone:this.state.voterPhone,
            voterCity:this.state.voterCity,
            voterIdProof:this.state.voterIdProof,
            email:this.state.email,
            password:this.state.password
        }

        this.props.createVoter(newVoter,this.props.history);
    }

    componentWillReceiveProps(nextProps){
            if(nextProps.errors) {
            this.setState({ errors : nextProps.errors});
        }
    }

    saveCandidate=(event)=>{
        event.preventDefault();
        let candidate= {  name:this.state.name,gender:this.state.gender,age:this.state.age,
            phoneNumber:this.state.phoneNumber,emailId:this.state.emailId,constituency:this.state.constituency,party:this.state.party,password:this.state.password};
            console.log('candidate =>' + JSON.stringify(candidate));
            CandidateService.createCandidate(candidate).then((res)=>{
                this.props.history.push("/login");
                alert("Candidate added Successfully");
            });
    }
    cancel(){
        this.props.history.push("/home");
    }

        nameHandler = (event) =>{
            this.setState({name: event.target.value});
        }
        genderHandler =(event)=> {
             this.setState({gender: event.target.value});
    
        }
        ageHandler =(event)=> {
            this.setState({age: event.target.value});
        }
        phoneNumberHandler =(event)=>{
            this.setState({phoneNumber: event.target.value});
        } 
        emailIdHandler =(event)=>{
            this.setState({emailId: event.target.value});
          }  
        constituencyHandler =(event) =>{
            this.setState({constituency: event.target.value});
        }

        partyHandler =(event) =>{
            this.setState({party: event.target.value});
        }
    
            passwordHandler =(event) =>{
            this.setState({password: event.target.value});
        }

    
    render() {
        const {errors}=this.state;
        return ( 
            <div className="container">
            <select className="form-select" name="sel" value={this.state.sel} onChange={this.onChange}>
            <option selected value="1">Voter Registration</option>
            <option value="2">Candidate Registration</option>
            </select>
            <br/>
            <br/>
            {this.state.sel==1?
                <div className="card card-body bg-light mb-3">
                <div className="row">
                <div className="col-md-8 m-auto">
                <h5 className=" display-5 text-center">Voter Registration Form</h5>
              <hr />  
                 <form onSubmit={this.onSubmit}>
                <div className="mb-3 row form-group">
                <label for="voterName" class="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="voterName" className={classnames("form-control", {"is-invalid":errors.voterName})} value={this.state.voterName} onChange={this.onChange} />
                            {
                                errors.voterName && (
                                    <div className="invalid-feedback">
                                    {errors.name}
                                    </div>
                                )
                            }
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="email" class="col-sm-2 col-form-label">Email ID</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" className={classnames("form-control", {"is-invalid":errors.email})} value={this.state.email} onChange={this.onChange}/>
                             {
                                errors.email && (
                                    <div className="invalid-feedback">
                                    {errors.email}
                                    </div>
                                )
                            }
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="voterAge" className="col-sm-2 col-form-label" value={this.state.voterAge} onChange={this.onChange}>Age</label>
                    <div className="col-sm-10">
                        <input type="number" className={classnames("form-control", {"is-invalid":errors.voterAge})} name="voterAge" value={this.state.voterAge} onChange={this.onChange}/>
                            {
                                errors.voterAge && (
                                    <div className="invalid-feedback">
                                    {errors.voterAge}
                                    </div>
                                )
                            }
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="voterPhone" class="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input type="text" name="voterPhone" className={classnames("form-control", {"is-invalid":errors.voterPhone})} value={this.state.voterPhone} onChange={this.onChange}/>
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="voterCity" class="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <input type="text" class="form-control" name="voterCity" value={this.state.voterCity} onChange={this.onChange}/>
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="voterIdProof" class="col-sm-2 col-form-label">ID Proof</label>
                    <div className="col-sm-10">
                        <input type="text" class="form-control" name="voterIdProof" value={this.state.voterIdProof} onChange={this.onChange} />
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" class="form-control" name="password" className={classnames("form-control", {"is-invalid":errors.password})} value={this.state.password} onChange={this.onChange}/>
                    </div>              
                </div>
                <div className="mb-3 row form-group">
                <label for="confirmPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" class="form-control" name="confirmPassword"/>
                    </div>              
                </div> 
                <input type="submit" className="btn btn-primary btn-block mt-4" />
                </form> 
            </div>
            </div>
            </div>
            : <div  style={{ backgroundImage: "url(/hom.jfif)" }}>
                <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                         <div className="col-md-8 m-auto">
                            <h5 className=" display-5 text-center">Candidate Registration Form</h5>
              <hr />  
              <form>
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="lastName"
                    onChange={this.nameHandler}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gender "
                    name="gender"
                    onChange={this.genderHandler}
                    value={this.state.gender}
                  />
                </div>
                 <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    name="age"
                    onChange={this.ageHandler}
                    value={this.state.age}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    pattern="[6-9][0-9]{9}"
                    className="form-control"
                    name="phoneNumber"
                    placeholder="PhoneNumber"
                    onChange={this.phoneNumberHandler}
                    value={this.state.phoneNumber}
                  />
                </div>
               <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="EmailId"
                    name="email"
                    onChange={this.emailIdHandler}
                    value={this.state.emailId}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Constituency"
                    name="constituency"
                    onChange={this.constituencyHandler}
                    value={this.state.constituency}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Party"
                    name="Party"
                    onChange={this.partyHandler}
                    value={this.state.party}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    onChange={this.passwordHandler}
                    value={this.state.password}
                  />
                </div>

                  <button className="btn btn-primary" onClick={this.saveCandidate} >Submit</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "100px"}}>Cancel</button>
              </form>
                         </div>
                    </div>
                </div>
            </div>
            </div>
            }
            </div>
        );
    }
}

Register.propTypes = {
    createVoter:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors : state.errors
})

export default connect(mapStateToProps,{createVoter})(Register);