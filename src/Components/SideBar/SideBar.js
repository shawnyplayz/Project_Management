import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
          <i className="fas fa-bars"></i>
        </a>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFXiJ7c2zSE67AlROJYCnk46mggZwfmts5BFy3sTbPg&s.jpg"
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>{(this.props.reducer.currentUser.uname).toUpperCase()}</strong>
                </span>
                <span className="user-role">{(this.props.reducer.currentUser.type).toLowerCase()}</span>
                <span className="user-status">
                  <i className="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            {this.props.reducer.currentUser.type === "EMPLOYEE" ? (
              //Employee
              <div className="sidebar-menu">
                <ul>
                  <li>
                    <NavLink to="/Home">
                      <i className="fa fa-folder"></i>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Bookmark">
                      <i className="fa fa-folder"></i>
                      <span>Technologies</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Bookmark">
                      <i className="fa fa-folder"></i>
                      <span>Personal</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <i className="fa fa-folder"></i>
                      <span>Log Out</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              // MENTOR
              <div className="sidebar-menu">
                <ul>
                  <li>
                    <NavLink to="/Home">
                      <i className="fa fa-folder"></i>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/AddProj">
                      <i className="fa fa-folder"></i>
                      <span>Add Projects</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <i className="fa fa-folder"></i>
                      <span>Log Out</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps)(SideBar));
