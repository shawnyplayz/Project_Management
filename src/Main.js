import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import AddProj from "./Components/AddProj/AddProj";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import HomeEmp from "./HomeEmp/HomeEmp";
import * as Logo from "./images/tabloid.jpg";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="bgImg">
        <div className="main_container">
          <Suspense fallback="loading">
            <Router basename="/Proj">
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/proj">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/Dashboard">
                  <Dashboard />
                </Route>
                <Route path="/Home">
                  <Dashboard />
                </Route>
                <Route path='/HomeEmp'>
                  <Dashboard />
                </Route>
                <Route path="/addProj">
                  <Dashboard />
                </Route>
                <Route path="/Personal">
                  <Dashboard />
                </Route>
              </Switch>
            </Router>
          </Suspense>
        </div>
      </div >
    );
  }
}
// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Main);
