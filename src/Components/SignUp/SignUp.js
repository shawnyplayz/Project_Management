import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { login } from "../../Reducer/actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: null,
      pass: null,
      loggedIn: false,
      checkbox: false,
      showSignUp: false,
      selectedOption: null,
    };
    this.onSignup = this.onSignup.bind(this);
  }
  onSignup(e) {
    debugger;
    e.preventDefault();

    try {

      let myuser = {
        type: this.state.selectedOption === "inlineCheckbox1" ? "MENTOR" : "EMPLOYEE",
        uname: this.state.uname,
        pass: this.state.pass
      }
      if (this.state.selectedOption === "inlineCheckbox1") {
        this.props.dispatch(login("users",
          myuser
        ));
        // this.props.dispatch(login("menName", this.state.uname));
        // this.props.dispatch(login("menPass", this.state.pass));
      }
      else {
        this.props.dispatch(login("users",
          myuser));
        // this.props.dispatch(login("empName", this.state.uname));
        // this.props.dispatch(login("empPass", this.state.pass));
      }
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="main_Login container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow container py-4 myRound">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="first">
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                      <h1 className="display-3">Sign Up</h1>
                    </div>
                  </div>
                  <form action="" method="post" name="login">
                    <div className="form-group my-2">
                      <label
                        for="exampleInputEmail1"
                        className="float-start h6"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="uname"
                        value={this.state.uname}
                        className="form-control"
                        id="text"
                        aria-describedby="emailHelp"
                        placeholder="Enter User Name"
                        onChange={(e) =>
                          this.setState({
                            uname: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group my-2">
                      <label
                        for="exampleInputEmail1"
                        className="float-start h6"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.pass}
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        onChange={(e) =>
                          this.setState({
                            pass: e.target.value,
                          })
                        }
                      />
                    </div>
                    <>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          checked={
                            this.state.selectedOption === "inlineCheckbox1"
                          }
                          onClick={(e) => {
                            debugger;
                            this.setState({
                              selectedOption: e.target.id,
                            });
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          MENTOR
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={
                            this.state.selectedOption === "inlineCheckbox2"
                          }
                          onClick={(e) =>
                            this.setState({
                              selectedOption: e.target.id,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          EMPLOYEE
                        </label>
                      </div>
                    </>
                    {/* <div className="col-md-12 text-center my-2"> */}
                    <div className="d-flex justify-content-evenly">
                      <Link to="/">
                        <button
                          // onClick={this.onSubmit}
                          className=" btn btn-block mybtn btn-outline-dark tx-tfm"
                        >
                          Back to Login
                        </button>
                      </Link>
                      <Link to="/signup">
                        <button
                          onClick={this.onSignup}
                          className=" btn btn-block mybtn btn-outline-dark tx-tfm"
                        >
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps)(SignUp));
