import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{

	state =
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


		
	
	
	render(){
		return(
				<Context.Provider value = {this.state}>
					{this.props.children}
				</Context.Provider>
			);
	}
}
export const Consumer = Context.Consumer;