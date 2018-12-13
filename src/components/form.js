import React, { Component, PropTypes } from 'react';
import {fetch_data, delete_user} from '../actions/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      first: '',
      last: '',
      gender: '',
      age: ''
    }
  };

onchange_func = e => {
  this.setState({[e.target.name]: e.target.value});
};

  render() {
    const {first, last, gender, age} = this.state;
    return (
      <div className = "row">
      <div className = "formy col-6">
      <form role = "form">
      <div className ="form-group ml-5 mt-3" >
      <label forhtml = "firstname">firstname</label>
      <input type="text" name="first" className= "form-control" value={first} onChange = {this.onchange_func}/>
      </div>
      <div className ="form-group ml-5 ">
      <label forhtml = "lastname">Lastname</label>
      <input type="text" name="last" className= "form-control" value={last} onChange = {this.onchange_func}/>
      </div>
      <div className ="form-group ml-5 ">
      <label forhtml = "gender">Gender</label>
      <input type="text" name="gender" className= "form-control" value={gender} onChange = {this.onchange_func}/>
      </div>
      <div className ="form-group ml-5 ">
      <label forhtml = "age">Age</label>
      <input type="text" name="age" className= "form-control" value={age} onChange = {this.onchange_func}/>
      </div>
      </form>
      <div>
      <input className="btn btn-success ml-5 btn-lg" type="submit" name="send" value="Add" onClick = {(e) => this.props.fetch_data(this.state)}/>
      </div>
      </div>
      <div className = "col-6">
      {this.props.user?<ul className = "list-group">{ this.props.user.map(user => {
        return (<li key = {user.first} className = "list-group-item"><i className ="fas fa-caret-down"> {user.first} </i><span className = "btn btn-danger float-right" style = {{float: 'right'}}onClick = {(e) => this.props.delete_user(user.first)}>Delete</span></li>)
      })
    }
    </ul>: <p>Waiting For names here</p>
  }
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    broke: state.info,
    user: state.Users.my_users
  }
};
 const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetch_data: fetch_data, delete_user: delete_user}, dispatch)
 }

  export default connect(mapStateToProps, matchDispatchToProps)(Form);
