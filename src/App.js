import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './LogIn'
import Debits from './components/Debits'
import Credits from './components/Credits'
class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      totalDeb: 0,
      totalCre: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
    
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }


  getTotalCredit(value)
  {
    let total = 0;
    for(let i = 0;i<value.length;i++)
    {
      total += value[i].amount
    }
    
    this.setState({
      totalCre: total
    })
  }

  getTotalDebit(value)
  {
    let total = 0;
    for(let i = 0;i<value.length;i++)
    {
      total += value[i].amount
    }
    //console.log("HI",total)

    this.setState({
      totalDeb: total
    })
  }




  componentDidMount()
  {
    fetch(
      "https://moj-api.herokuapp.com/credits")
      .then((response) => response.json())
      .then((res) => this.getTotalCredit(res));
  
          fetch(
        "https://moj-api.herokuapp.com/debits")
        .then((response) => response.json())
         .then((res) => this.getTotalDebit(res)); 
        
  }


  render() {
      
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} totalCre ={this.state.totalCre} totalDeb={this.state.totalDeb}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitComponent = () =>(<Debits accountBalance ={this.state.accountBalance} totalCre ={this.state.totalCre}/>)
    const CreditComponent = () =>(<Credits accountBalance ={this.state.accountBalance} totalDeb={this.state.totalDeb}/>)
    console.log(this.state.totalDeb)
    console.log(this.state.totalCre)
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
            
          </div>
        </Router>
    );
  }

}

export default App;