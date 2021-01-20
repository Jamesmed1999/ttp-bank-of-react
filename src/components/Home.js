import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import '../App.css';
class Home extends Component {
  render() {

    return (
        <div>
          <p id= 'login'><Link to="/login">Log In </Link></p>
          <img src="https://cdn.wallethub.com/wallethub/posts/76002/banking-landscape-report.png" alt="bank"/>
          <h1>Bank of React</h1>
          <AccountBalance accountBalance={this.props.accountBalance} totalCre ={this.props.totalCre} totalDeb={this.props.totalDeb}/>
          <div id = "Nav">
          <ul>
          <li><Link to="/userProfile">User Profile  </Link></li>
          <li><Link to="/debit">Debit Page  </Link></li>
          <li> <Link to="/credit">credit Page </Link></li>
          
          </ul>
          </div>
          
        </div>
    );
  }
}

export default Home;