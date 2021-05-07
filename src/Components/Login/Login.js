import React, { Component } from "react";
import { Row, FormGroup, FormControl, FormLabel, Button, FormText} from 'react-bootstrap';
import './Login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../Shared/validator';
import LoginService from "../../Services/LoginService";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }


    


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
        console.log(formData);
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();
        let errors = this.validateLoginForm();

        if(errors === true){
            const c1='CANDIDATE';
            const v1='VOTER';
            const a1='ADMIN';
            if(this.state.formData.select===c1){
                console.log(this.state.formData.email);
                console.log(this.state.formData.password);

                LoginService.validateCandidate(this.state.formData.email,this.state.formData.password).then((res)=>{
                alert("hello");
                    console.log(res);
                    if(res.data==='Valid'){
                    this.props.history.push(`/candidate/dashboard`);
                    }
                    else if(res.data==='Invalid'){
                        alert("Wrong Password. Try again");
                        
                    }
                    else{
                        alert("Invalid Credentials");
                    }
                });
            
            }
            else if(this.state.formData.select===v1){
                LoginService.validateVoter(this.state.formData.email,this.state.formData.password).then((res)=>{
                    
                        console.log(res);
                        if(res.data==='Valid'){
                        this.props.history.push(`/voter/dashboard`);
                        }
                        else if(res.data==='Invalid'){
                            alert("Wrong Password. Try again");
                            
                        }
                        else{
                            alert("Invalid Credentials");
                        }
                    });
            }
            else if(this.state.formData.select===a1){


                this.props.history.push('/dashboard');
            }
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="home">
            <div className="Login">
                <h2 className="head">LOGIN</h2>
                <Row>
                    <form onSubmit={this.login}>
                    <FormGroup>
                            <FormLabel>Login in as</FormLabel>
                            <FormControl as="select" name="select" onChange={this.handleInputChange}>
                            <option>---Select---</option>
      <option>ADMIN</option>
      <option>VOTER</option>
      <option>CANDIDATE</option>
    </FormControl>

                        </FormGroup>
                        <FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                            <FormLabel>Email</FormLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email &&
                            <FormText>{errors.email}</FormText>
                        }
                        </FormGroup>
                        <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password &&
                            <FormText>{errors.password}</FormText>
                        }
                        </FormGroup>
                        <Button type="submit" bsStyle="primary" onClick={this.login}>Sign-In</Button>
                    </form>
                </Row>
            </div>
            </div>
        )
    }
}

export default Login;