import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CandidateDashboardComponent from './CandidateDashboardComponent';
import {Jumbotron} from 'react-bootstrap';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Button} from 'reactstrap';
class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            candidates:[],
            isOpen:false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout(){
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <div className="candidates">
                 <div>
            <Navbar color="faded"  light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={() => this.logout()}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
            <div className="container">
                <Jumbotron>
                <div className="row">
                    <div className="col-md-12">
                        
                        <hr />
                        <CandidateDashboardComponent />
                        
                    </div>
                </div>
                </Jumbotron>
            </div>
            </div>

        );
    }

}

export default DashboardComponent;