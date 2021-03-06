import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
constructor(){
    super();
    this.state={
        email:'',
        password:''
    }
}
handleSubmit =async event=>{
    event.preventDefault();
    const {email,password}=this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({email:'',password:''});
    }catch(error){
        console.log(error);
    }
    
}
handleChange=event=>{
    const {name,value}=event.target
    this.setState({[name]:value})
}
render(){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Signin with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                
                <FormInput type="password"  name="password" label="password" handleChange={this.handleChange} value={this.state.password} required/>
                
                <div className="buttons">
                <CustomButton type="submit" > Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Sign in with Google
            </CustomButton>
                </div>
            
            </form>
        </div>
    )
}

}export default SignIn