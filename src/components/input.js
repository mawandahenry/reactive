import React, { Component } from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title,
    body: data.body
  }));

};
  render() {
    const {title, body}  = this.state;
    return(
      <div>
    <div className = "jumbotron">
    <h1>{title}</h1>
    <p className = "lead">{body}</p>
    </div>
      </div>
    )
  }
}

export default Input;
