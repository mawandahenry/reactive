import React, { Component } from 'react';
import Header from './header';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {addNumber,subtractNumber} from '../actions/';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from './form';
import About from '../pages/pager';
class App extends Component {
	constructor(props){
		super(props);
}

render(){
return (
<Router>
<div>
<Header branding = "hello naco"/>
<Switch>
<Route exact path = "/" Component = {Form} />
<Route exact path = "/about" Component = {About} />
</Switch>
</div>
</Router>
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
