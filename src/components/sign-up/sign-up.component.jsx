import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss'
import {auth,createUserProfileDocuments} from '../../firebase/firebase.utils';

class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }

    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmpassword}=this.state;
        if(password !== confirmpassword){
            alert("password not match")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocuments(user,{displayName});
           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
           })


        }catch(error){
                console.error(error)
        }
        
    }
    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value})

    }
    render(){
        const {displayName,email,password,confirmpassword}=this.state
        return(
            <div className="sign-up">
                <h2 className="title">I donot have an account</h2>
                <span>Sign up with your email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    >
                        
                    </FormInput>
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    >
                        
                    </FormInput>
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    >
                        
                    </FormInput>
                    <FormInput
                    type='password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    >
                        
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}export default Signup;