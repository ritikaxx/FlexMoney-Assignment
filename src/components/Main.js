import {React} from "react";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Main extends Component{

    render() {
      return(<>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>Yoga</Card.Title>
        <Card.Text>
          We hold our classes in nature also!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Different types of Yoga</ListGroup.Item>
        <ListGroup.Item>Yoga Poses for good health</ListGroup.Item>
        <ListGroup.Item>Basics to Advanced!</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-standing-recumbent-yoga-poses">Poses</Card.Link>
        <Card.Link href="https://www.everydayhealth.com/fitness-pictures/yoga-poses-for-beginners.aspx">Health</Card.Link>
      </Card.Body>
    </Card>
      </>
      )
    }
  }

