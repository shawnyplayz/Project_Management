import React, { Component } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { projects } from '../../Reducer/actions';
import './AddProj.css'
class AddProj extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fromDate: null,
      toDate: null,
      displayArr: [],
      selectedMem: null,
      dispatchingArr: [],
      stack: null,
      nameProj: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  members() {
    this.state.displayArr = this.props.reducer.users
    return (this.state.displayArr.map((data, index) => {
      return (
        <option value={
          data.uname
        } key={index} id="opt" > {data.uname}</option >
      )
    }))
  }
  onHandleChange = (e) => {
    debugger
    this.setState({
      selectedMem: e.target.value
    });
  }
  onHandleAll = (e) => {
    this.setState({
      nameProj: e.target.value
    });
  }
  addMembers() {
    debugger
    let asd = [];
    asd = this.state.dispatchingArr
    asd.push(this.state.selectedMem)
    this.setState({
      dispatchingArr: asd
    })
    // this.state.displayArr.splice(1, this.state.indi)
    // this.props.dispatch(projects('PROJECTS', this.props.reducer.user))
  }
  onSubmit() {
    let asd = {
      name: this.state.nameProj,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      members: this.state.dispatchingArr
    }

    debugger
    this.props.dispatch(projects('projects', asd))
    this.setState({
      nameProj: '',
      fromDate: null,
      toDate: null,
      selectedMem: '',
      dispatchingArr: []
    })
  }
  render() {
    return (
      // <div className='container my-4'>
      //   <div className="row">
      //     <div className="card shadow">
      //       <div className="card-Header">
      //         <h3>Add Projects</h3>
      //       </div>
      //       <div className="card-body">
      //         <form>
      //           <div className="row my-2">
      //             <div className="col-lg-6">
      //               <div class="form-group">
      //                 <label for="exampleInputEmail1">Name of the Project</label>
      //                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      //               </div>
      //             </div>
      //             <div className="col-lg-6">
      //               <div class="form-group">
      //                 <label for="exampleFormControlInput1">Requirements</label>
      //                 <textarea class="form-control" placeholder='frontend/backend' id="exampleFormControlTextarea1" rows="1"></textarea>
      //               </div>
      //             </div>
      //             <div className="col-lg-3">
      //               <label for="exampleFormControlInput1">From Date</label>
      //               <DatePicker selected={this.state.fromDate} onChange={(date) => this.setState({
      //                 fromDate: date
      //               })} />
      //               {/* <div class="form-group">
      //                 <label for="exampleFormControlTextarea1">Example textarea</label>
      //                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      //               </div> */}
      //             </div>
      //             <div className="col-lg-3">
      //               <label for="exampleFormControlInput1">To Date</label>
      //               <DatePicker selected={this.state.toDate} onChange={(date) => this.setState({
      //                 toDate: date
      //               })} />
      //             </div>
      //           </div>
      //           <div className="row my-2">
      //             <div className="col-lg-6">
      //               <div class="form-group my-2">
      //                 <label for="exampleFormControlFile1">Add Documents</label>
      //                 <input type="file" class="form-control-file" id="exampleFormControlFile1" />
      //               </div>
      //             </div>
      //             <div className="col-lg-6">
      //               <li className="nav-item dropdown mx-3">
      //                 <a
      //                   className="nav-link dropdown-toggle"
      //                   href="/"
      //                   id="AboutNavbarDropdown"
      //                   role="button"
      //                   data-bs-toggle="dropdown"
      //                   aria-expanded="false"
      //                 >
      //                   About
      //                 </a>
      //                 <ul
      //                   className="dropdown-menu"
      //                   style={{ marginLeft: "46%" }}
      //                   aria-labelledby="AboutNavbarDropdown"
      //                 >
      //                   <li>
      //                     <a
      //                       className="dropdown-item"

      //                       activeclassname="active"
      //                     >
      //                       About Us
      //                     </a>
      //                   </li>
      //                   <li>
      //                     <a
      //                       className="dropdown-item"

      //                       activeclassname="active"
      //                     >
      //                       Our Pedagogy
      //                     </a>
      //                   </li>
      //                 </ul>
      //               </li>

      //             </div>
      //           </div>

      //         </form>
      //       </div>

      //     </div>
      //   </div >
      // </div >
      <Container className='my-4'>
        <Card className='shadow-sm'>
          <Card.Header className="bg-white text-success">
            <div className="d-flex">
              <h4 className='m-0 text-left'>
                Add Projects
              </h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Row className='my-2'>
              <Col sm={12} md={6} lg={6}>
                <Form.Label className="my-shawn-label m-0 my-2">Name of the Project</Form.Label>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <input
                  className="form-control selectwidth text-left"
                  name="nameProj"
                  value={this.state.nameProj}
                  type="text"
                  placeholder=""
                  onChange={(e) => this.onHandleAll(e)}
                />
              </Col>
            </Row>
            <Row className='my-2'>
              <Col sm={12} md={6} lg={6}>
                <Form.Label className="my-shawn-label m-0 my-2">Select Stack</Form.Label>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Control
                  className='my-1'
                  as="select"
                  value={this.state.stack}
                  onChange={this.onHandleChange}
                >
                  <option value="select">MERN</option>
                  <option value="select">MEAN</option>
                  <option value="select">.NET</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Label className="my-shawn-label m-0 my-2">From Date</Form.Label>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <DatePicker selected={this.state.fromDate} onChange={(date) => this.setState({
                  fromDate: date
                })} />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Label className="my-shawn-label m-0 my-2">To Date</Form.Label>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <DatePicker selected={this.state.toDate} onChange={(date) => this.setState({
                  toDate: date
                })}
                />
              </Col>
            </Row>
            <Row className='my-2'>
              <Col sm={12} md={6} lg={6}>
                <Form.Label className="my-shawn-label m-0 my-2">Add Member</Form.Label>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <Form.Control
                  className='my-1'
                  as="select"
                  value={this.state.selectedMem}
                  onChange={this.onHandleChange}
                >
                  <option value="select">Select</option>
                  {this.members()}
                </Form.Control>
              </Col>
              <Col sm={12} md={2} lg={2}>
                <Button className='rounded realbtn-width btn-color-right h-100' size="md"
                  onClick={() => this.addMembers()}
                >Add Members
                </Button>
              </Col>
            </Row>
            <Row className='my-2'>
              <Col sm={12} md={12} lg={12}>
                <div className="anime-btns">
                  {this.state.dispatchingArr.map(item =>
                    <p className="my-2 me-4 my-btn">
                      {item}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Button className='rounded realbtn-width btn-color-right h-100' size="md"
              onClick={this.onSubmit}
            >Save Project
            </Button>

          </Card.Footer>
        </Card>
      </Container>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps)(AddProj));