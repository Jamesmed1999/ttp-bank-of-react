import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
         creditArr: []
         
        
        
        }
        this.handleForm = this.handleForm.bind(this)
        };
       
      

getCreditInfo(obj)
{
  this.setState({
    creditArr: obj
  })
  console.log(this.state.creditArr)
}

displayDebitInfo()
{
  let resultsArray = this.state.creditArr.map(el=> {return   <li>{"Amount:  " + el.amount + " Date:  " + el.date + " Description: " + el.description}</li>})
    return resultsArray
}
handleForm()
{
  let inputAm = document.getElementById('am').value
  inputAm = parseInt(inputAm)
  let inputDes = document.getElementById('des').value
 console.log("ammount inputed: " + inputAm + "description: " + inputDes)
let date = new Date()
let cool = {amount: inputAm,date: date,description: inputDes}
let temp = [...this.state.creditArr]
temp.push( cool)
this.setState({creditArr: temp})

}
componentDidMount() {

    fetch(
        "https://moj-api.herokuapp.com/credits")
        .then((response) => response.json())
         .then((res) => this.getCreditInfo(res)); 

}

  render() {
    let total = 0;
    for(let i = 0;i<this.state.creditArr.length;i++)
    {
      total += this.state.creditArr[i].amount
    }
    return (
        <div>
        <Link to="/">Home</Link>
        <h1>Credits</h1>
        <h3 >account balance {Math.round(this.props.accountBalance  + total - this.props.totalDeb)}</h3>
          <div id = 'h5'>Credits: </div>
         {this.getCreditInfo}
         <ul className = "credit-debit">{this.displayDebitInfo()}</ul>
         <form  >
          <div className ="form-field">
            <label htmlFor="am">Amount </label>
            <input type="number" name="am" id ="am" />
          </div>
          <div className ="form-field">
            <label htmlFor="des">Description </label>
            <input type="text" name="des" id ="des" />
          </div>
          
        </form>
        <button onClick = {this.handleForm}>submit new credit</button>
        </div>
    );
  }
}


export default Credits;
