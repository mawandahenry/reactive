import React, {Component} from 'react';
import {Consumer} from './container/cons';



class Form extends Component{
	
	state = {
	    name: '',
		age: '',
		number:'',
		email: ''
		};
	   
	
		
	
	
	sender = (x) => {
		x.preventDefault();
		console.log(this.state);
	};
	changer = e => this.setState({[e.target.name]: e.target.value});
	
	render(){
	  const {name,age,email,number} = this.state;

	  return (
	  	<Consumer>
	  	{value => {

	  		const {contacts} = value;
	  		return (

            <div className = "card mb-03">
      <div className = "card-header">Add user</div>
        <div className = "card-body">
          <form onSubmit = {this.sender}>
        <div className = "form-group">
      <label htmlFor = "name">Name</label>
    <input type = "text" name = "name" value = {name} onChange = {this.changer} placeholder = "Enter name" className = "form-control"/>
   </div>
   <div className = "form-group">
      <label htmlFor = "email">Email</label>
    <input type = "email" name = "email" value = {email} onChange = {this.changer} placeholder = "Enter email address" className = "form-control"/>
   </div>
   <div className = "form-group">
      <label htmlFor = "age">Age</label>
    <input type = "text" name = "age"  value = {age} onChange = {this.changer} placeholder = "Enter your age" className = "form-control"/>
   </div>
   <div className = "form-group">
      <label htmlFor = "contact">Contact</label>
    <input type = "text" name = "number" value = {number} onChange = {this.changer} placeholder = "Enter name" className = "form-control"/>
   </div>
   <div className = "form-group">
    <input type = "submit" value = "Add"  className = "btn btn-info btn-block"/>
   </div>
</form>
</div>
</div>
	  			)
	  	}}

	  	</Consumer>
	  	);

		
	}
}
export default Form;