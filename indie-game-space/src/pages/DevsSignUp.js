//developers sign up page

import React, { Component } from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Form, FormH1, FormButton,
        FormLabel, Container, Text } from './DevsSignUp.elements';
import axios from 'axios';

export default class DevsSignUp extends Component{

  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = async (change, e) => {
    
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
      // what to do after sending of data
    })
    .catch(err=>console.log(err));
  }

  render(){
    return(
      <>
        <TopFiller />
        <Container>
          <FormWrap>
            <FormContent>
              <Form action='#'>
                <FormH1> Sign Up to Create an Account </FormH1>
                  <FormLabel htmlFor='for'> Username </FormLabel>
                  <FormInput type='email' required />
                  <FormLabel htmlFor='for'> Email </FormLabel>
                  <FormInput type='email' required />
                  <FormLabel htmlFor='for'> Password </FormLabel>
                  <FormInput type='password' required/>

                  <FormButton type='submit' onClick={this.handleSubmit}> Continue </FormButton>
                  <Text> Already have an account? </Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }

}