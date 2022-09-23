import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import HomeEmp from "../../HomeEmp/HomeEmp";
import AddProj from "../AddProj/AddProj";
import Home from "../Home/Home";
import Personal from "../Personal/Personal";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-2">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <Switch>
              <Route exact path="/Dashboard">
                {
                  this.props.reducer.currentUser.type === 'EMPLOYEE' ?
                    <HomeEmp />
                    :
                    <Home />
                }
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path='/HomeEmp'>
                <HomeEmp />
              </Route>
              <Route path="/AddProj">
                <AddProj />
              </Route>
              <Route path="/Personal">
                <Personal />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps)(Dashboard))