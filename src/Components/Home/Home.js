import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { bookmark } from "../../Reducer/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import moment from 'moment/moment';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectArr: [],
      empArr: []
    };
  }
  componentDidMount() {
    let asd = []
    let bsd = []
    this.setState({
      projectArr: this.props.reducer.projects
    })
    debugger
    asd = (this.props.reducer.projects)
    for (let i = 0; i < asd.length; i++) {
      if ((asd[i].members).includes(this.props.reducer.currentUser.uname)) {
        (bsd).push(asd[i])
      }
    }
    this.setState({
      empArr: bsd
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-3 my-head">{this.props.reducer.currentUser.type}</h1>
        <div className="row">
          {this.state.empArr.map((el, index) => {
            debugger

            return (
              <div className="col-md-4">
                <div className="card my-2 shadow myCard" key={index}>
                  <div className="card-body">
                    <div className="heightTitle">
                      <h2 className="card-title meri-link text-truncate">{el.name}</h2>
                    </div>
                    <div className="heightText">
                      {/* <p className="card-text meri-link">{el.type}</p> */}
                    </div>
                    <div className="heightAuthor">
                      <p className="card-text meri-link">
                        <h5>From Date: {moment(el.fromDate).format("MMM Do YY")}</h5>
                      </p>
                    </div>
                    <div className="heightAuthor">
                      <p className="card-text meri-link">
                        <h5>To Date: {moment(el.toDate).format("MMM Do YY")}</h5>
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="btn btn-danger btn-sm">
                          <h6>Technology Stack : {el.stack}</h6>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ToastContainer />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps)(Home));
