import React, {Component} from 'react';
import Contact from './contact';
class Content extends Component{
	constructor(props){
		super(props);

		this.state =
		{
			contacts: [

				{name: 'Mawanda henry',
				email: 'mawanda111@gmail.com',
				age: 23,
				number:583-444-33
			},

				{
					name: 'baligima David',
					email: 'bals@gmail.com',
					age:43,
					number:'999-99-99'
				},
				{
					name: 'Kintu marvin',
					email:'kints@yahoo.com',
					age:21,
					number:'555-555-55'
				},
				{
					name: 'balahukako david',
					email: 'davis@gmail.com',
					age:19,
					number: '333-333-33'

				},
				{
					name:'Ssekandi timothy',
					email: 'sseks@uganda.com', 
					age:69,
					number: '222-222-22'
				}
			]
		}


		
	}

	deleter = (id) => {
		 const {contacts} = this.state;
		 const newCon = contacts.filter(contact => contact.age !== id);
		this.setState = ({contacts: newCon});
		console.log(newCon);
	};
	render(){
		const {contacts} = this.state;   
		return(

			<div className = "container">
			{contacts.map(contact => (
				<Contact key = {contact.age} contacts = {contact}  deleter = {this.deleter.bind(this, contact.age)}/>
			))}		
			</div>

			);
	}
}
export default Content;