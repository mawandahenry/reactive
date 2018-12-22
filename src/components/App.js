import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import About from '../pages/pager';
import Contact from './contacts';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './edit';
import {Switch, Route} from 'react-router-dom';
class App extends Component {
	constructor(props){
		super(props);
}

render(){
return (

<div>
<Header />
<Switch>
<Route exact path = "/" component = {Contact} />
<Route  path = "/edit" component = {Edit} />

</Switch>
</div>

);
}
}



export default App;
