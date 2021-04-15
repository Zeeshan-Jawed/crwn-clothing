

import React from 'react';
import './App.css';
import AppRouter from './config/Router';
import {auth,createUserProfileDocuments} from  './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
  
  unsSubcribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsSubcribeFromAuth=  auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef= await createUserProfileDocuments(userAuth);
          userRef.onSnapshot(snapshot=>{
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            });
          });
         
        }
        else setCurrentUser(userAuth)

      })
  }
  componentWillUnmount(){
    this.unsSubcribeFromAuth();
  }
  render(){
    return (
      <div >
       
       < AppRouter ></AppRouter>
      </div>
    );
  }
}
const mapStatetoProps=({user})=>({
  currentUser:user.currentUser
})
const matchDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,matchDispatchToProps)(App);
