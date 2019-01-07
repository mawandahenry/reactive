
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect  } from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import Spinner2 from '../images/giphy.gif';


class FireForm extends Component {


  render() {
    const {clients} = this.props;
    return (
    <div className="card mt-20 ml-60">
      <div className="card-header">
        <h3 className ="text-center">Contact Details</h3>
      </div>
      <div className="card-body">
      <ul className="list-group">
        { clients ? (clients.map(item => {
          return (
            <React.Fragment>
            <Link  to = {`/edited/${item.id}`} >
              <li className="list-group-item" key = {item.id}>{item.username}<span className="fa fa-trash pull-right" style = {{fontSize: '15px'}}></span></li>
              </Link>
            <li className="list-group-item" >{item.email}</li>
            </React.Fragment>
          )
        }) ): <img className="img-thumbnail" src={Spinner2} alt="Getting information..........." />}
      </ul>

      </div>
    </div>
//       if (!isLoaded(this.props.auth)) {
//         return null
//       }
//       if (isEmpty(this.props.auth)) {
//         return (
//           <div>
//             <button className = "btn btn-danger mt-10"
//               onClick={
//                 () => this.props.firebase.login({ provider: 'google', type: 'popup' })
//               }
//             >Log in with Google</button>
//           </div>
//         )
//       }
//       return (
// <div>
//   <button style={{ width: "20rem" }} className = "btn btn-primary" onClick={() => this.props.firebase.logout()}>
//    Logout
// </button >
//
// <h3>Names:</h3> {this.props.auth.displayName}
//
// <img className="image-thumb" src={this.props.auth.photoURL} alt="kifanannyi" />
//         </div>
      )

   }
  }



export default compose(
  firestoreConnect([{collection: 'user'}]),
  connect((state,props) => ({
    clients: state.firestore.ordered.user
  }))
)(FireForm);
