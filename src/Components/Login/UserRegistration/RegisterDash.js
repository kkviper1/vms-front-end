import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterDashboardComponent from './RegisterDashboardComponent';
import {Jumbotron} from 'react-bootstrap';
class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            candidates:[]
        }
    }

    render() {
        return (
            <div className="candidates">
            <div className="container">
                <Jumbotron>
                <div className="row">
                    <div className="col-md-12">
                        
                        <hr />
                        <RegisterDashboardComponent />
                        
                    </div>
                </div>
                </Jumbotron>
            </div>
            </div>

        );
    }

}

export default DashboardComponent;