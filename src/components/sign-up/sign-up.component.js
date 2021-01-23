import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Passwords don\'t match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log('unable to signup', error);
        }
        
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                    label='Display Name'
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    required
                    label='Email'
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange}
                    required
                    label='Password'
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    required
                    label='Confirm Password'
                    />
                    
                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>

                </form>
                
            </div>
        )
    }
}

export default SignUp;