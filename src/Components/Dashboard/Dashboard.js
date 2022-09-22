import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import AddProj from "../AddProj/AddProj";
import Home from "../Home/Home";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
export default class Dashboard extends Component {
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
                <Home />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/AddProj">
                <AddProj />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
