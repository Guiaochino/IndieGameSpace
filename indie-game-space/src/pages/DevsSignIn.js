//developers sign in page

import React, { useState } from 'react';
import { FormInput, Form, FormH1, FormButton,
        FormLabel, ForgotLink, SignUpLink } from './Form.elements';
import { Container } from '../globalStyles';
import axios from 'axios';

function DevsSignIn (props) {

  const [pass, setPass] = useState();

  // Handles Change in Email
  const handleUsername = async e => {
    await props.setUser(e.target.value);
    sessionStorage.setItem("user", e.target.value);
  }

  // Handles Change in Password
  const handlePass = async e => {
    await setPass(e.target.value);
  }

  // Handles Submission of data
  const handleSubmit = e => {
    e.preventDefault();

    let data = new FormData();
    data.append("username", props.user);
    data.append("password", pass);

    const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/login.php";
    
    axios.post(url, data)
    .then(response => {
      if (response.data === 1) {
        sessionStorage.setItem("logStatus", true);
        alert("Login Successful!");
        window.location.replace('/');
      } else {
        alert("Username and Password Do not Match!");
      }
    })
    .catch(err => console.log(err));
  }

  return(
    <>
      <Container>
        
        <Form action='login.php'>
          <FormH1> Sign in to your account </FormH1>
          <FormLabel htmlFor='for'> Username </FormLabel>
          <FormInput type='text' required onChange={handleUsername} />
          <FormLabel htmlFor='for'> Password </FormLabel>
          <FormInput type='password' required onChange={handlePass}/>  

          <FormButton onClick={handleSubmit}> SIGN IN </FormButton>

          <ForgotLink> Forgot Password? </ForgotLink>
          <SignUpLink to='/singup'> Create an Account </SignUpLink>
        </Form>
          
      </Container>
    </>
  );
  
}

export default DevsSignIn;