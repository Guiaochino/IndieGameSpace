//developers sign in page

import React, { Component } from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Icon, Form, FormH1, FormButton,
        FormLabel, Container, Text } from './DevsSignIn.elements';
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
        <TopFiller />
        <Container>
          <FormWrap>
            {/* <Icon to="/"> IndieGameSpace </Icon> */}
            <FormContent>
              <Form action='login.php'>
                <FormH1> Sign in to your account </FormH1>
                <FormLabel htmlFor='for'> Username </FormLabel>
                  <FormInput type='text' required onChange={this.handleUsername} />
                  <FormLabel htmlFor='for'> Passwword </FormLabel>
                  <FormInput type='password' required onChange={this.handlePass}/>
                  <FormButton type='submit' onClick={this.handleSubmit}> Login </FormButton>
                  <Text> Forgot Password? </Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}

export default DevsSignIn;