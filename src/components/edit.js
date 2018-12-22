import React,{Component} from 'react';
import { update_contact} from '../actions/';
import {connect} from 'react-redux';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      namex: '',
      emailx: '',
      phonex: '',
      idx: ''
    }
  this.nameInput = React.createRef();
  this.emailInput = React.createRef();
  this.phoneInput = React.createRef();
  }
  componentDidMount(){
    // const {id, name,email,phone} = this.props.edits;
    // this.setState({
    //   namex: name,
    //   emailx: email,
    //   phonex: phone,
    //   idx: id
    // })
    console.log(this.props.edits);
  }


componentWillReceieveProps(nextProps){
    console.log('yello am triggered');
}
      submit_handler = (e) => {
        e.preventDefault();
        console.log(this.nameInput.current.value+this.emailInput.current.value)
        this.setState({
          namex: this.nameInput.current.value,
          emailx: this.emailInput.current.value,
          phonex: this.phoneInput.current.value,
          idx: this.props.edits.id
        })
        //this.props.update_contact(this.state);
      //  console.log(this.state.namex+this.state.emailx+this.state.phonex)
        this.setState({
          namex: '',
          emailx: '',
          phonex: '',
          idx: ''
        })


      }
  render(){

const {id,name, email, phone} = this.props.edits;
    return (
      <div>
      <div className = "ml-20 mt-10 " style = {{width: '500px', marginLeft: '400px',marginTop: '80px'}}>
       <h3 className="display-4 text-center">Edit Contacts </h3>
      <form onSubmit = {this.submit_handler.bind(this)}>

      <div className = "form-group">
      <label htmlFor ="Names">Names</label>
      <input className="form-control" type="text" name="name" defaultValue={name} ref = {this.nameInput}/>
      </div>
      <div className = "form-group">
      <label htmlFor="email">Email</label>
      <input className="form-control" type="email" name="email" defaultValue={email} ref = {this.emailInput}/>
      </div>
      <div className = "form-group">
      <label htmlFor="contact">Contact</label>
      <input className="form-control" type="text" name="phone" defaultValue={phone} ref = {this.phoneInput} />
      </div>
      <div className = "form-group">

      <input className="btn btn-primary btn-block" type="submit" name="editor" value="Edit" />
      </div>
      </form>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  edits: state.Users.editor
})
export default connect(mapStateToProps, {update_contact})(Edit);
