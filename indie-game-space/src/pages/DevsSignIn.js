//developers sign in page

import React, { useState } from 'react';
import { FormInput, Form, FormH1, FormButton,
        FormLabel, ForgotLink, SignUpLink } from './Form.elements';
import { Container } from '../globalStyles';
import axios from 'axios';

function DevsSignIn () {
  
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [success, setSuccess] = useState(false);

  // Handles Change in Email
  const handleUsername = async e => {
    await setUser(e.target.value)
  }

  // Handles Change in Password
  const handlePass = async e => {
    await setPass(e.target.value)
  }

  // Handles Submission of data
  const handleSubmit = e => {
    e.stopPropagation();

    let data = new FormData();
    data.append("username", user);
    data.append("password", pass);

    const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/login.php";
    
    axios.post(url, data)
    .then(response => {
      console.log(response.data);
      if (response.data === 1) {
        console.log(response.data);
        alert("Login Successful!");
        setSuccess(true)
      } else {
        alert("Username and Password Do not Match!");
        setSuccess(false)
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

          <FormButton to={{
            pathname : success ? "/DevProfile" : "/devsSignIn",
            state : {
              user : user
            }
          }} onClick={handleSubmit}> SIGN IN </FormButton>

          <ForgotLink> Forgot Password? </ForgotLink>
          <SignUpLink to='DevsSignUp'> Create an Account </SignUpLink>
        </Form>
          
      </Container>
    </>
  );
  
}

export default DevsSignIn;