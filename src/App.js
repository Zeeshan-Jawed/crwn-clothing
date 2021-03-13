

import React from 'react';
import './App.css';
import AppRouter from './config/Router';
import {auth} from  './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsSubcribeFromAuth=null;
  componentDidMount(){
    this.unsSubcribeFromAuth=  auth.onAuthStateChanged(user => {
        this.setState({currentUser:user});
      })
  }
  componentWillUnmount(){
    this.unsSubcribeFromAuth();
  }
  render(){
    return (
      <div >
       
       < AppRouter currentUser={this.state.currentUser}></AppRouter>
      </div>
    );
  }
}


export default App;
