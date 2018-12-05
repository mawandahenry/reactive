import React, { Component } from 'react';
import Header from './header';
import 'font-awesome/css/font-awesome.min.css';
import Contacti from '../container/lists';
class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
   <div className="App">
      <Header branding = "React-native"/>
   	<Contacti />
</div>
    );
  }
}

export default App;
