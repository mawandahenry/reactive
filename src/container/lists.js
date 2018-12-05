import React, {Component} from 'react';
import {connect} from 'react-redux';

class Contacti extends Component{

elcontacto = () => {
    return this.props.cook.map((contact) => {
      return(  <li className = "list-group-item"> contact.name </li>);
    });
  }
render(){
  return (<ul className = "list-group">{this.elcontacto}</ul>);
}
}

function mapStateToProps(state){
  return{
    cook: state.contactList
  };

}
export default connect(mapStateToProps)(Contacti);
