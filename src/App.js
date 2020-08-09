import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Homepage} from './page/homepage/homepage'
import ShopPage from './page/shop/shop';
import Header from './components/header/header';
import SignInAndUp from './page/sign-in-up/sign-in-up'

import BrowserDetection from 'react-browser-detection';

import {auth} from './firebase/firebase.utils'
const browserHandler = {
  chrome: () => <div>Chrome is fantastic!</div>,
  firefox:()=><div>Firefox his here</div>,
  googlebot: () => <div>Hi GoogleBot!</div>,
  default: (browser) => <div>Hi {browser}!</div>,
};

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubcribeFromAuth=null;
  componentDidMount(){
    this.unsubcribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render(){
    return (
      <div>
        
        <Header currentUser={this.state.currentUser}/>
        <BrowserDetection>
          { browserHandler }
        </BrowserDetection>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
