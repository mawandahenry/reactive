import React, {Component} from 'react';
import {Provider} from './container/cons';

class Contact extends Component{
	constructor(props){
		super(props)
	}
	state = {boss: false};
   caller = e => {
   	this.setState({boss: !this.state.boss});
   };

   deletehandler = () => {
   		this.props.deleter();
   };

render(){
	const {contacts} = this.props;
	const {boss}   = this.state;
	return (
  <Provider>
  <div className = "card card-body mb-3">
 <h4>{contacts.name} <i className = "fa fa-caret-down" onClick = {this.caller}></i><i 
  style = {{float: 'right'}} className = "fa fa-trash" onClick = {this.deletehandler}>
 </i></h4>
 {boss ? (<ul className = "list-group">
 <li className = "list-group-item">
 {contacts.number}
 </li>
 <li className = "list-group-item">
{contacts.email}
 </li>
 <li className = "list-group-item">
{contacts.age}
 </li>
 </ul>) : null}
</div>
</Provider>

		);

}
}
export default Contact;