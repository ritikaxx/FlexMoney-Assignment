import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class JoineesTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    axios
      .delete(
        'http://localhost:4000/students/delete-student/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Student successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.phone}</td>
        <td>{this.props.obj.age}</td>
        <td>{this.props.obj.batch}</td>
        
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-student/' + this.props.obj._id}
          >
            Edit
          </Link>

          {/* <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button> */}

          <Link
            className="edit-link" path={"product/:id"}
            to={'/payment/' + this.props.obj._id}
          >
            Pay
          </Link>

        </td>
      </tr>
    )
  }
}
