import React, { Component } from 'react';
import Header from './header';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {addNumber,subtractNumber} from '../actions/';
import {bindActionCreators} from 'redux';
import Form from './form';
class App extends Component {
	constructor(props){
		super(props);
}

render(){
return (
<div>
<Header branding = "hello naco"/>
<Form />
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
