// src/components/AccountBalance.js

import React, {Component} from 'react';
import '../App.css';
class AccountBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
    
  }
 

  render() {
 
  
  let val =this.props.totalCre-this.props.totalDeb
     
    return (
        <div>
          <h2 id = 'home-balance'> Balance:
           {Math.round(this.props.accountBalance  + val)} </h2> 
          
        </div>
    );
  }
}

export default AccountBalance;