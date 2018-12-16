import React, { Component } from 'react';
import {connect} from 'react-redux';
class Input extends Component {
  constructor(props){
    super(props);

  }
// const rect = this.props.contacts.map(contact => {
//   return (<li key = {contact.name} className = "list-group-item"> {contact.name}</li>);
// })

  render() {

    return(
      <div>
  <div className = "card mb-10 col-6">
  <div className = "card-header">
  <h3 className="display-3">Contact List</h3>
  <div className = "card-body">
{  this.props.contacts.map(contact => {
    return (<li key = {contact.name} className = "list-group-item">{contact.name}<i className = "fa fa-caret-down"></i><i className = "fa fa-trash tipsy"></i><i className = "fa fa-pencil-square-o"></i></li>);
  })
}
  </div>
  </div>
  </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    contacts: state.Users.my_users
  }
}

export default connect(mapStateToProps)(Input);
