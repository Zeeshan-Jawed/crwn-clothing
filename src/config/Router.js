import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from '../pages/homepage/homepage.components'
import Shop from '../components/shop/shop.component'
import Header from '../components/header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
const AppRouter=({currentUser})=>{
  return(
    <div> 
                
            <Router>
            <Header currentUser={currentUser}/>
            <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </Router>
        </div>
  )
}
  
  export default AppRouter;