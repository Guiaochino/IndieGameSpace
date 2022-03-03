//developers sign in page

import React, { Component } from 'react'
import { FormInput, Form, FormH1, FormButton,
        FormLabel, ForgotLink, SignUpLink } from './Form.elements';
import { Container } from '../globalStyles';
import axios from 'axios';

class DevsSignIn extends Component {

  state = {
    username : "",
    password : ""
  };

  // Handles Change in Email
  handleUsername = async e => {
    await this.setState({
      username : e.target.value
    })
  }

  // Handles Change in Password
  handlePass = async e => {
    await this.setState({
      password: e.target.value
    })
  }

  // Handles Submission of data
  handleSubmit = e => {
    e.preventDefault()

    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);

    const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/login.php";
    
    axios.post(url, data)
    .then(response => {
      alert(response.data);
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <>
        <Container>
          
          <Form action='login.php'>
            <FormH1> Sign in to your account </FormH1>
            <FormLabel htmlFor='for'> Username </FormLabel>
            <FormInput type='text' required onChange={this.handleUsername} />
            <FormLabel htmlFor='for'> Password </FormLabel>
            <FormInput type='password' required onChange={this.handlePass}/>                <FormButton type='submit' onClick={this.handleSubmit}> SIGN IN </FormButton>
            <ForgotLink> Forgot Password? </ForgotLink>
            <SignUpLink to='DevsSignUp'> Create an Account </SignUpLink>
          </Form>
            
        </Container>
      </>
    );
  }
}

export default DevsSignIn;