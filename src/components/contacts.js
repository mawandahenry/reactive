import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delete_user, fetch_just, get_contact} from '../actions';
import Form from './form';
import Edit from './edit';
import uuid from 'uuid';
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      is_active: true,
      is_edited: false
    }
  }
  componentDidMount(){
    this.props.fetch_just()
  }

  toggler = (e)=> {
    this.setState({
      is_active: !this.state.is_active
    })
  }

  deleter =(id, ex)=> {
    this.props.delete_user(id);
  }
  troublr =(data) => {
    this.setState({
      is_edited: !this.state.is_edited
    })
    this.props.get_contact(data)
  }
  render() {

    const {my_users} = this.props.cons;
    const {is_edited} = this.state;
    if(is_edited){
      return (
        <React.Fragment>
        <Edit />
        </React.Fragment>
      )
    }
    return (  <div>
<div className = "row">
<div className = "card col-6">
<div className = "card-header">
<h3>Contact List</h3>
</div>
<div className = "card-body">
{my_users.map(item => {
  return (
    <React.Fragment>
    <ul className="list-group" >
<li className="list-group-item" key = {item.id}>{item.name} <i className = "fa fa-trash text-danger mr-3" onClick = {this.deleter.bind(this, item.id)}></i>
<span className = "fa fa-caret-down" onClick = {this.toggler.bind(this)}></span><span className="fa fa-pencil" onClick = {this.troublr.bind(this, item.id)}></span></li>
{
  this.state.is_active ? (
    <li className="list-group-item" >{item.phone}</li>):
     null
 }
    </ul>

    </React.Fragment>
  );
})}
</div>
</div>
<div className = "col-6">
<Form />
</div>
</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  cons: state.Users
})
export default connect(mapStateToProps, {delete_user,fetch_just,get_contact})(Contact);
