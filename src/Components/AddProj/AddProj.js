import React, { Component } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { projects } from '../../Reducer/actions';
import { AiFillCloseCircle } from 'react-icons/ai';

import './AddProj.css'
import swal from 'sweetalert';
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
      nameProj: '',
      techs: ['MEAN', '.NET', 'PYTON']
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
    if (e.target.name === 'stack') {
      this.setState({
        stack: e.target.value
      })
    }
    else {
      this.setState({
        selectedMem: e.target.value
      });
    }
  }
  onHandleAll = (e) => {
    this.setState({
      nameProj: e.target.value
    });
  }
  addMembers() {
    debugger
    if(this.state.selectedMem === null || this.state.selectedMem ==='' ||this.state.selectedMem ==='select'){
      swal({
        title: "Nope!",
        text: "Add atleast one Member!",
        icon: "error",
      })
      return
    }
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
      stack: this.state.stack,
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
  techStack() {
    debugger
    return (this.state.techs.map((data, index) => {
      return (
        <option value={data} key={index} id="opt" > {data}</option >
      )
    }))
  }
  removeMem(e,index){
debugger
this.state.dispatchingArr.splice(index, 1)
    this.setState({
      ...this.state.dispatchingArr
    })
console.log(index)
  }
  render() {
    return (
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
                  name="stack"
                  value={this.state.stack}
                  onChange={this.onHandleChange}
                >
                  <option value="MERN">MERN</option>
                  {this.techStack()}
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
                  {this.state.dispatchingArr.map((item,index) =>
                  {
                    return (
                    <p className="my-2 me-4 my-btn d-flex align-items-center justify-content-around" key={index} onClick={(e)=>this.removeMem(e,index)}>
                      {item}<AiFillCloseCircle/>
                    </p>)
                  }
                  )
                }
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