import React,{Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Spin from '../images/ajax1.gif';

class Fire_edit extends Component {
  constructor(props){
    super(props);
    this.usernameInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      username: '',
      email: '',
      password: ''

    }

  }
  componentDidMount(){

     console.log('panther');
  }
  submit_handler = (e) => {
    const {firestore,history,edits} = this.props;
        e.preventDefault();
        const newThing = {
          username: this.usernameInput.current.value,
          email: this.emailInput.current.value,
          password: this.passwordInput.current.value
        }
        firestore.update({collection: 'user', doc: edits.id}, newThing).then(document.forms[0].reset()).then(history.push('/fire'));
  }
  render(){
    const {edits} = this.props;
if (edits){
const {username, email,id,password} = edits;

    return (
      <div>
      <div className = "ml-20 mt-10 " style = {{width: '500px', marginLeft: '400px',marginTop: '80px'}}>
       <h3 className="display-4 text-center">Edit Contacts </h3>
      <form onSubmit = {this.submit_handler}>
      <div className = "form-group">
      <label htmlFor ="username">Username</label>
      <input className="form-control" type="text" name="username" defaultValue={edits.username} ref = {this.usernameInput} />
      </div>
      <div className = "form-group">
      <label htmlFor="email">Email</label>
      <input className="form-control" type="email" name="email" defaultValue={edits.email} ref = {this.emailInput}/>
      </div>
      <div className = "form-group">
      <label htmlFor="password">Password</label>
      <input className="form-control" type="text" name="password" defaultValue={edits.password} ref = {this.passwordInput}/>
      </div>
      <div className = "form-group">
      <input className="btn btn-primary btn-block" type="submit" name="editor" value="Update" />
      </div>
      </form>
      </div>
      </div>
    )
  }
  else{
    return <img className = "img-thumbnail" style = {{margin: 'auto'}} src = {Spin} alt = "Loading.........." />;
  }
  }
}

export default compose(firestoreConnect(props => [{collection:'user', storeAs: 'edit_user', doc:props.match.params.id}]),
connect(({firestore: {ordered}},props) => ({
  edits: ordered.edit_user && ordered.edit_user[0]
})))(Fire_edit);
