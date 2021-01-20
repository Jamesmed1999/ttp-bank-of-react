import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
         debittArr: [],
         
    
        };
        this.displayDebitInfo = this.displayDebitInfo.bind(this)
        this.handleForm = this.handleForm.bind(this)
        this.updateBalance = this.updateBalance.bind(this)
        
      }


setDebitInfo(obj)
{
    this.setState({
        debittArr: obj
    })
    
    
}

updateBalance()
{

}

displayDebitInfo()
{   
  
    let resultsArray = this.state.debittArr.map(el=> {return   <li>{"Amount:  " + el.amount + " Date:  " + el.date + " Description: " + el.description}</li>})
    return resultsArray
    
}

handleForm()
{
  let inputAm = document.getElementById('am').value
  inputAm = parseInt(inputAm)
  
 let inputDes = document.getElementById('des').value
 let date = new Date()
 let cool = {amount: inputAm,date: date,description: inputDes}
let temp = [...this.state.debittArr]
temp.push( cool)
this.setState({debittArr: temp})

}


componentDidMount(){

    fetch(
        "https://moj-api.herokuapp.com/debits")
        .then((response) => response.json())
         .then((res) => this.setDebitInfo(res));
         

}

  render() {
    let total = 0;
    for(let i = 0;i<this.state.debittArr.length;i++)
    {
      total += this.state.debittArr[i].amount
    }
    console.log(this.props.totalCre)
    return (
        <div>
          
        <Link to="/">Home</Link>
          <h1>Debits</h1>
          <h3 >account balance {Math.round(this.props.accountBalance - total + this.props.totalCre) }</h3>
          <div id = 'h5'>Debits: </div>
          <ul id = "credit-debit">{this.displayDebitInfo()}</ul>
          <form  >
          <div className ="form-field">
            <label htmlFor="am">Amount</label>
            <input type="number" name="am" id ="am" />
          </div>
          <div className ="form-field">
            <label htmlFor="des">Description</label>
            <input type="text" name="des" id ="des" />
          </div>
          
        </form>
        <button onClick = {this.handleForm}>submit new debit</button>
        
         
        </div>
    );
  }
}

export default Debits;


//take info from field pass it to a function that pushes the new object to the object array