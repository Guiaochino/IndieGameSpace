import React from 'react'
import { FormContent, FormInput, FormWrap,
        Icon, Form, FormH1, FormButton,
        FormLabel, Container, Text } from './DevsSignIn.elements';

const DevsSignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/"> IndieGameSpace </Icon> */}
          <FormContent>
            <Form action='#'>
              <FormH1> Sign in to your account </FormH1>
              <FormLabel htmlFor='for'> Email </FormLabel>
                <FormInput type='email' requires />
                <FormLabel htmlFor='for'> Passwword </FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'> Continue </FormButton>
                <Text> Forgot Password? </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default DevsSignIn;