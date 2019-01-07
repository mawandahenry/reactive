import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';

import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Switch, Route} from 'react-router-dom';

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
<Route  path = "/welcome" component = {Welcome} />
</Switch>
</div>

);
}
}



export default App;
