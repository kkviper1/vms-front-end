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
        
        <Route path = "/login" exact component = {Login}></Route>
        <Route path = "/voting/results" exact component = {ListResultComponent}></Route>
        <Route path = "/voting" exact component = {ListVotingsession}></Route>

        <Route exact path="/Home" component={Home}/>
        <Route exact path="/register" component={RegisterDash}/>
        <Route exact path="/candidate/dashboard" component={DashComponent}/>
        <Route exact path="/dashboard" component={DashboardComponent}/>
          <Route exact path="/addCandidate" component={AddCandidate}/>
          <Route exact path="/getCandidate" component={GetCandidate}/>
          <Route exact path="/getVoters" component={ViewVoters}/>
          <Route exact path="/deleteCandidate" component={DeleteCandidate}/>



          <Route path="/registerVoter" component={Register}/>
        <Route path="/regcnd" component={Regster}/>
        <Route path="/voter/dashboard" component={VoterDashComponent}/>
        </Switch>
        <FooterComponent />
			</div>
      </Router>
      </Provider>
  );
}

export default App;
