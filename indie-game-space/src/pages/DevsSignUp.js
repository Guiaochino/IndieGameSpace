//developers sign up page

import React from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Form, FormH1, FormButton,
        FormLabel, Container, SignInLink, Dropdown,
        DropdownContent, DropBtn
        } from './DevsSignUp.elements';

const DevsSignUp = () => {
  return (
    <>
      <TopFiller />
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#sign-up'>
              <FormH1> Sign Up to Create an Account </FormH1>
                <FormLabel htmlFor='for'> Username </FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'> Email </FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'> Password </FormLabel>
                <FormInput type='password' required/>
                
                <Dropdown>
                  <DropBtn> Developer Type </DropBtn>
                    <DropdownContent>
                      <option> Individual </option>
                      <option> Group </option>
                    </DropdownContent>
                </Dropdown>

                <FormButton type='submit'> SIGN UP </FormButton>
                <SignInLink to='devsSignIn'> Already have an account? </SignInLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default DevsSignUp;