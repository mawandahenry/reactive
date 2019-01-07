import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect  } from 'react-redux-firebase';
import  Loader  from '../images/ajax1.gif';
import Spin  from '../images/apple.gif';
import { success_mess, reset_mess} from '../actions/';
class  Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      is_user: false,
      username: '',
      pic_url: '',
      senderID: '',
      recId:'',
      spin_load: false

    }
    this.message = React.createRef();
  }
  toggler = () => {
    this.setState({
      is_user: !this.state.is_user
    })
  }
  send_mess = (id,e) => {
    this.setState({
      pic_url: id.providerData[0].photoURL,
      username: id.displayName,
      recId: id.providerData[0].uid,
      senderID:this.props.location.state.user_detail.providerData[0].uid,
      senderName:this.props.location.state.user_detail.displayName
    })
  }
  sender = (e) => {

    e.preventDefault();
    let mess= this.message.current.value;
    let tim = new Date();

    const new_obj = {
      message: mess,
      senderID:this.state.senderID,
      time:tim,
      RecID:this.state.recId,
      senderName:this.state.senderName

    }
    if(!new_obj.senderName && !new_obj.RecID){
      alert('please go to users and choose a client your sending the message !!!');
      return;
    }
    this.setState({spin_load: true});
    this.props.firestore.add({collection: 'chats'}, new_obj).then(() => {
    this.setState({spin_load: false});
    this.props.success_mess("post successfully inserted");
    }).catch( (error) => {
      alert(error);
      console.log('no internet')
    })
    document.forms[0].reset();
  }
  render() {
    const {user_detail} = this.props.location.state;
    const {username,pic_url,spin_load} = this.state;

    return(
      <div >
    <h4 className="display-4 text-center">Welcome Aboard mr: {user_detail.displayName} </h4>

    <hr />
<div className="row container" style = {{margin: 'auto'}}>
<div className="col-md-3">
<div className="card xyz ">
<div className="card-header">
<h3 className = "text-center">Settings</h3>
</div>
<div className="card-body">
<table className = "table thead-dark">
  <thead>
    <tr>
      <Link className="btn btn-danger" to = "/login">Go to Logout</Link>
    </tr>
  </thead>
  <tbody>
    <tr>
<td>
<p className = "lead">users <span className = "fa fa-caret-down" onClick = {this.toggler}></span></p>
{this.state.is_user?
  <div style = {{ height: '400px', overFlow: 'scroll'}}>
  <ul className="list-group " >
  {this.props.users? this.props.users.map(user=> {
    return (
      <li className="list-group-item" style = {{cursor: 'default'}} key = {user.providerData[0].uid} onClick = {this.send_mess.bind(this,user)}>{user.displayName}<span className="badge badge-pill badge-primary" >Online</span></li>
    )
  }): <img className="img-thumbnail" src={Loader} alt="Loading......." />
  }
  </ul></div>: null
}
 </td>
    </tr>
    <tr>
<td><button className="btn btn-primary">New Message</button></td>
    </tr>
  </tbody>

</table>
</div>
</div>
</div>
<div className="col-md-6 border">
<div className="card">
<div className="card-header">
<h3 className="text-center"> <table className = "table"><tr><td>{<img src = {pic_url} alt = "profile" style = {{width: '50px', borderRadius: '50%'}} />}</td><td>{username?username:(<p>Client Name</p>)} </td></tr></table></h3>
</div>
<div className="card-body fav" >
{this.props.chats? (
  this.props.chats.map(chat => {
    return (
      <div className="card text-center mb-2" key = {chat.id}>
  <div className="card-header">
    <span className = "pull-left text-success">{chat.senderName}</span><span className = "pull-right"> {chat.time.toDate().toString()}</span>
  </div>
  <div className="card-body">
    <p className="card-text ">{chat.message}</p>

  </div>

</div>
    )
  })
):<img className="img-thumbnail" src={Loader} alt="Loading......." />}
</div>

<div className="card-footer">
<form >
<div className="input-group mb-3">
  <input type="text" className="form-control" ref = {this.message} name = "post" placeholder="message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-info" type="button" id="button-addon2" onClick = {this.sender}>Post</button>
  </div>
</div>

</form>
</div>
</div>
</div>
<div className="col-md-3">
<div className="card ">
<div className="card-header bg-info ">
<h3 className="text-center">Profile</h3>
</div>
<div className="card-body">
<img className="img-rounde" src={user_detail.photoURL} alt="" width = '100' />
<div className="bg-light">
<p>{user_detail.email}</p>
<p>vi</p>

{this.props.message.message? (<div className="alert alert-success">{this.props.message.message}
<button type="button" className="close" data-dismiss="alert" aria-label="Close" >
    <span aria-hidden="true" onClick = {this.props.reset_mess}>&times;</span>
  </button>
  </div>): null}
  <div>
{spin_load? <img src = {Spin} alt = "sending message...." style = {{margin: 'auto'}} />: null}
  </div>
</div>
</div>
</div>
</div>
</div>
      </div>

    )
  }
}


export default compose(
  firestoreConnect([{collection: 'users'},{collection: 'chats'}]),
  connect((state,props) => ({
    users: state.firestore.ordered.users,
    chats: state.firestore.ordered.chats,
    message: state.Alert

  }), {success_mess,reset_mess})
)(Welcome);
