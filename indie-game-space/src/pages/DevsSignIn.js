//developers sign in page

import React from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Form, FormH1, FormButton,
        FormLabel, Container, ForgotLink, SignUpLink } from './DevsSignIn.elements';

const DevsSignIn = () => {
  return (
    <>
      <TopFiller />
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1> Sign In to your Account </FormH1>
              <FormLabel htmlFor='for'> Username </FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'> Password </FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'> SIGN IN </FormButton>
                <ForgotLink> Forgot Password? </ForgotLink>
                <SignUpLink to='devsSignUp'> Create an Account </SignUpLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default DevsSignIn;