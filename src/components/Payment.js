import {React} from "react";
import Button from 'react-bootstrap/Button';
import { Component } from "react";
const date=new Date();
export default class Payment extends Component{

    render() {
      if(date.getDate() === 1){
        return(
        <>
        <h1>You have successfully enrolled in our yoga classes!</h1>
        <h2>Our fees is Rs 500 only for every month!</h2>
            <Button variant="danger" size="lg" block="block" type="submit" className="mt-4" onClick={this.handlePayment()}>
            Pay Now
            </Button>
        </>
        )
      }
      else{
        return(
        <>
        <h2>You are done with your fees for this month!</h2>
        </>
        )
      }
    }
  }

