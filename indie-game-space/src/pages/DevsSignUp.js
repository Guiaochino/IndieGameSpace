//developers sign up page

import React, { Component } from 'react'
import { FormInput, Form, FormH1, FormButton,
        FormLabel, SignInLink, 
         DropdownContent } from './Form.elements';
import { Container } from '../globalStyles';
import axios from 'axios';

export default class DevsSignUp extends Component{

  state = {
    username: "",
    email: "",
    password: "",
    type: ""
  };

  handleUsername = async (e) => {
    await this.setState({
      username : e.target.value
    })
  }

  handletype = async (e) => {
    console.log(e.target.value);
    await this.setState({
      type: e.target.value,
    })
  }

  handleEmail = async (e) => {
    await this.setState({
      email : e.target.value
    })
  }

  handlePassword = async (e) => {
    await this.setState({
      password : e.target.value
    })
  }


  handleSubmit = e => {
    // Put Code Here for Signup

    let data = new FormData();
    data.append("username", this.state.username);
    data.append("email", this.state.email);
    data.append("password", this.state.password);

    const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/signup.php"

    axios.post(url, data)
    .then(response=> {
      alert(response.data);
    })
    .catch(err=>console.log(err));
  }

  render(){
    return(
      <>
        <Container>
          <Form action='#'>
            <FormH1> Sign Up to Create an Account </FormH1>
            <FormLabel htmlFor='for'> Username </FormLabel>
            <FormInput type='text' required onChange={ this.handleUsername }/>

            <FormLabel htmlFor='for'> Email </FormLabel>
            <FormInput type='email' required onChange={ this.handleEmail }/>

            <FormLabel htmlFor='for'> Password </FormLabel>
            <FormInput type='password' required onChange={ this.handlePassword }/>

            <FormLabel> Group or Individual Developer </FormLabel>
            <DropdownContent onChange={this.handletype}>
              <option> -- Select Input --</option>
              <option> Individual </option>
              <option> Group </option>
            </DropdownContent>

            <FormButton type='submit' onClick={this.handleSubmit}> SIGN UP </FormButton>
            <SignInLink to='/devsSignIn'> Already have an account? </SignInLink>
          </Form>
        </Container>
      </>
    );
  }
}
