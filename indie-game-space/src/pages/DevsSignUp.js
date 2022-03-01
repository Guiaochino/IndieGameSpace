//developers sign up page

import React, { Component } from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Form, FormH1, FormButton,
        FormLabel, Container, Text } from './DevsSignUp.elements';
import axios from 'axios';

class DevsSignUp extends Component{

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

                  <FormButton type='submit'> Continue </FormButton>
                  <Text> Already have an account? </Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }

}

export default DevsSignUp;