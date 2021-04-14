

import React from 'react';
import './App.css';
import AppRouter from './config/Router';
import {auth,createUserProfileDocuments} from  './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsSubcribeFromAuth=null;
  componentDidMount(){
    this.unsSubcribeFromAuth=  auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef= await createUserProfileDocuments(userAuth);
          userRef.onSnapshot(snapshot=>{
            this.setState({
              currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
            });
          });
          
        }
        else this.setState({currentUser:userAuth})

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
