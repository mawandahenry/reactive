import React,{Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Spin} from '../images/apple.gif';


class Fire_add extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      loading: false
    }


}


pickey = (x) => {
  this.setState({
    [x.target.name] : x.target.value
  })
}
submit_handler = (e) => {
  e.preventDefault();
  const {firestore,history} = this.props;
  this.setState({loading: true});
  firestore.add({collection: 'user'}, this.state).then(() => {
  this.setState({loading: false});
  history.push('/fire');
  }).catch( (error) => {
    alert(error)
  })

}
  render(){


    return (
      <div>
      <div className = "ml-20 mt-10 " style = {{width: '500px', marginLeft: '40px',marginTop: '80px'}}>
       <h3 className="display-4 text-center">Add to Firebase </h3>
      <form onSubmit = {this.submit_handler}>

      <div className = "form-group">
      <label htmlFor ="username">username</label>
      <i className="fa fa-user"></i>
      <input className="form-control" type="text" name="username" onChange = {this.pickey}/>

      </div>
      <div className = "form-group">
      <label htmlFor="email">Email</label>
      <input className="form-control" type="email" name="email" onChange = {this.pickey}/>
      </div>
      <div className = "form-group">
      <label htmlFor="password">Password</label>
      <input className="form-control" type="password" name="password" onChange = {this.pickey} />
      </div>
      <div className = "form-group">

      <input className="btn btn-primary btn-block" type="submit" name="editor" value="Add_user" />
      </div>

{this.state.loading? (<img src = {Spin} alt = "loading..." />) : null}


      </form>
      </div>
      </div>
    )
  }
}

export default firestoreConnect()(Fire_add);
