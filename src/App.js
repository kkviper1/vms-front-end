import Login from './Components/Login/Login';
import './App.css';
import HeaderComponent from './Components/Layout/Header';
import FooterComponent from './Components/Layout/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListResultComponent from './Components/results/ListResultComponent';
import ListVotingsession from './Components/Voting Session/ListVotingsession';
import DashComponent from './Components/Candidate/Dashboard/CandidateDash';
import DashboardComponent from './Components/Candidate/CandidateDashboard';
import RegisterDash from './Components/Login/UserRegistration/RegisterDash';
import AddCandidate from './Components/Candidate/AddCandidate';
import DeleteCandidate from './Components/Candidate/DeleteCandidate';
import GetCandidate from './Components/Candidate/GetCandidate';
import Regster from './Components/Voter/RegisterCandidate';
import Register from "./Components/Voter/RegisterVoter";
import store from './store';
import { Provider } from 'react-redux';
import VoterDashComponent from './Components/Voter/Dashboard/VoterDashboard';
import ViewVoters from './Components/Voter/ViewVoters'
import Home from './Components/Login/Home';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
     
      <HeaderComponent />
        <Switch>
        
        <Route path = "vms-front/login" exact component = {Login}></Route>
        <Route path = "vms-front/voting/results" exact component = {ListResultComponent}></Route>
        <Route path = "vms-front/voting" exact component = {ListVotingsession}></Route>

        <Route exact path="vms-front/" component={Home}/>
        <Route exact path="vms-front/register" component={RegisterDash}/>
        <Route exact path="vms-front/candidate/dashboard" component={DashComponent}/>
        <Route exact path="vms-front/dashboard" component={DashboardComponent}/>
          <Route exact path="vms-front/addCandidate" component={AddCandidate}/>
          <Route exact path="vms-front/getCandidate" component={GetCandidate}/>
          <Route exact path="vms-front/getVoters" component={ViewVoters}/>
          <Route exact path="vms-front/deleteCandidate" component={DeleteCandidate}/>



          <Route path="vms-front/registerVoter" component={Register}/>
        <Route path="vms-front/regcnd" component={Regster}/>
        <Route path="vms-front/voter/dashboard" component={VoterDashComponent}/>
        </Switch>
        <FooterComponent />
			</div>
      </Router>
      </Provider>
  );
}

export default App;
