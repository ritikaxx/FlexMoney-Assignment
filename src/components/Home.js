import {React} from "react";
import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
export default class Home extends Component{

    render() {
      return(<>
            <h2>Welcome to our community!
                You have successfully started your first month and completed your initial payment!
            </h2>
            <Carousel>
      <Carousel.Item>
        <img
          className="c-block w-100 "
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Move your joints every day.</h3>
          <p>Yoga is a light, which once lit will never dim.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Yoga is the ultimate practice.</h3>
          <p>The nature of yoga is to shine the light of awareness into the darkest corners of the body.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
          “Change only happens in the present moment. The past is already done. The future is just energy and intention.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </>
      )
    }
  }

