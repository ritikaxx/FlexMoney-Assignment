import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default class EditBatch extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserAge = this.onChangeUserAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelect= this.handleSelect.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      phone: '',
      age: '',
      batch: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          age: res.data.age,
          bathc: res.data.batch
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeUserAge(e) {
    this.setState({ age: e.target.value })
  }

  handleSelect(e){
    this.setState({batch:e});
  }
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      batch: this.state.batch,
    };

    axios.put('http://localhost:4000/users/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/joinees-list')
  }


  render() {
    const date = new Date();
    if(date.getDate()===1){
      return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
        </Form.Group>


        <Form.Group controlId="Phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeUserPhone} />
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control id= "range_weight" type="range" min="18" max="65" value={this.state.age} onChange={this.onChangeUserAge} oninput="range_weight_disp.value = range_weight.value" />
          <output  id="range_weight_disp"></output>
        </Form.Group>
        
        
        <Form.Group controlId="Batch">
          <Form.Label>Batch</Form.Label>
          <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={this.handleSelect}>
            <Dropdown.Item eventKey="batch-1">6-7 AM</Dropdown.Item>
            <Dropdown.Item eventKey="batch-2">7-8 AM</Dropdown.Item>
            <Dropdown.Item eventKey="batch-3">8-9 AM</Dropdown.Item>
            <Dropdown.Item eventKey="batch-4">5-6 PM</Dropdown.Item>
            </DropdownButton>
        </Form.Group>
        <h4>You selected {this.state.batch}</h4>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
    }
    else{
      alert("You can only change your Batch at the beginning of the next month !")
    }
  
  }
}