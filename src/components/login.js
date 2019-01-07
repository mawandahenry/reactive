import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import '../css/login.css';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import Welcome from './welcome';

class Login extends Component {
constructor(props){
  super(props);

}

form_handler = (e) => {

  console.log(e)
}
render(){

  if (!isLoaded(this.props.auth)) {
    return null
  }
if (isEmpty(this.props.auth))
{
const {handleSubmit,firebase, fields: {username, password}} = this.props;
console.log(username)
  return(
  <div>
<div className="col-md-6 col-sm-8 col-xs-8 " style = {{margin: 'auto', marginTop: '10%'}}>
<div className="card stl">
<div className="card-header">
<h3 className = "text-center">Login Form</h3>
</div>
<div className="card-body">
<form onSubmit = {handleSubmit}>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i className = "fa fa-user"></i></span>
  </div>
  <input {...username} type="text" name = "username" disabled className="form-control" placeholder="username" aria-label="username" aria-describedby="basic-addon1" />
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i className = "fa fa-key"></i></span>
  </div>
  <input  {...password} type="password" disabled name = "password"  className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" />
</div>
<div className="form-group">
<input className="btn btn-info btn-block" type="submit" value="Login" />
</div>
</form>
<div className="card-footer">
<button className = "btn btn-danger mt-10" onClick = {() => firebase.login({ provider: 'google', type: 'popup' })}>
 Google
</button>
<button className = "btn btn-primary mt-10  pull-right tip" onClick = {() => firebase.login({ provider: 'facebook', type: 'popup' })}> Facebook</button>
<p className = "lead">Don t have an Account? <Link to="#"> Signup Now!</Link></p>

</div>
</div>
</div>
</div>



    </div>
)
}


        return (
      <div>
    <button style={{ width: "20rem" }} className = "btn btn-primary" onClick = {() => this.props.firebase.logout()}>
     Logout
  </button >
  <div className="card col-md-3 xxl">
<img className="card-img-top pull-center " src={this.props.auth.photoURL} alt="Card image" style = {{width:"inherit", height: "200px", margin: "auto"}}/>
<div className="card-body">

  <div className="card-text">
  <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">{this.props.auth.displayName}</h4>
  <p className = "lead">
  Email Address:<span> {this.props.auth.email} </span>
  </p>

  <hr />
  <p className>
  Contact: {this.props.auth.phoneNumber}
  </p>
  <p className = "lead">
  Details provided by: {this.props.auth.providerData[0].providerId}
  </p>
</div>

  </div>
  <Link to={{
    pathname: '/welcome',
    search: '?gender = male',
    state: {user_detail: this.props.auth}
  }}
  className="btn btn-success">Proceed to the chat app</Link>
</div>
</div>

          </div>
        )


}
}
const mapStateToProps = state => {
return {
  auth: state.firebase.auth

 }
}
Login.propTypes = {
    auth: PropTypes.object,
    firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
}
export default compose(firebaseConnect(),connect(mapStateToProps,null),reduxForm({form: 'john',
fields: ['username', 'password']}))(Login);
