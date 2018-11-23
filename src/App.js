import React, { Component } from 'react';
import Header from './header';
import Content from './contents';
import Form from './form';
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="App">
      <Header branding = "React-native"/>
   		<Form />
        <Content  />
      </div>
    );
  }
}

export default App;
