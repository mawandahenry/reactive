import React, { Component } from 'react';
import Header from './header';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {addNumber,subtractNumber} from '../actions/';
import {bindActionCreators} from 'redux';
import {Switch, Route} from 'react-router-dom';
import Input from './input';
import Form from './form';
import About from '../pages/pager';

class App extends Component {
	constructor(props){
		super(props);
}

render(){
return (

<div>
<Header branding = "hello naco"/>
<Switch>
<Route exact path = "/forms" component = {Form} />
<Route exact path = "/about" component = {About} />
<Route exact path = "/" component = {Input} />
<Input />
</Switch>
</div>

);
}
};


function mapStateToProps(state){
	return {
		count: state.posts,
		wine: state.info
	}
};
const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({adding: addNumber,subtract: subtractNumber},dispatch)
};

export default connect(mapStateToProps,matchDispatchToProps)(App);
