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
<div>
<button className = "btn btn-danger" onClick = {this.props.adding}> add++ </button> <br/>
<button className = "btn btn-primary" onClick = {this.props.subtract}> Subtract </button>
<p>{this.props.count.counter}</p>
</div>
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
