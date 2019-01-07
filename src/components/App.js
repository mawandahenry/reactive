import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import About from '../pages/pager';
import Contact from './contacts';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './edit';
import {Switch, Route} from 'react-router-dom';
import FireForm from './fire_user';
import Fire_add from './fire_add';
import Fire_edit from './fire_edit';
import Login from './login';
import Welcome from './welcome';
class App extends Component {
	constructor(props){
		super(props);
}

componentDidMount(){
	const {firebase} = this.props;

}

render(){
return (

<div>
<Header />
<Switch>
<Route exact path = "/" component = {Login} />
<Route  path = "/edit" component = {Edit} />
<Route  path = "/fire" component = {FireForm} />
<Route  path = "/add" component = {Fire_add} />
<Route  exact path = "/edited/:id" component = {Fire_edit} />
<Route  path = "/login" component = {Login} />
<Route  path = "/welcome" component = {Welcome} />
</Switch>
</div>

);
}
}



export default App;
