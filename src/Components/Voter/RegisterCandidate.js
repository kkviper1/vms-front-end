import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CandidateService from './Actions/CandidateService';
class Regster extends Component {
constructor(props){
    super(props);
    this.state={ 
        //id: this.props.match.params.candidateId,
        name:"",
        gender:"",
        age:"", 
        phoneNumber:"",
        emailId:"",
        constituency:"",
        party:"",
        password:"",
    }
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
saveCandidate=(event)=>{
    event.preventDefault();
    let candidate= { name:this.state.name,gender:this.state.gender,age:this.state.age,
        phoneNumber:this.state.phoneNumber,emailId:this.state.emailId,constituency:this.state.constituency,party:this.state.party,password:this.state.password};
        console.log('candidate =>' + JSON.stringify(candidate));
        CandidateService.createCandidate(candidate).then((res)=>{
            this.props.history.push("/ListCandidate");
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
        return (
            <div  style={{ backgroundImage: "url(/hom.jfif)" }}>
                <div className="container">
                    <div className="row">
                         <div className="col-md-8 m-auto">
                            <h5 className=" display-5 text-center">Registration Form</h5>
              <hr />  
              <form>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.firstNameHandler}
                    value={this.state.firstName}
                  />  
              </div>
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.lastNameHandler}
                    value={this.state.lastName}
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
                    type="password"
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
        );
    }
}

export default Regster;