//developers sign up page

import React, { Component } from 'react'
import { FormInput, Form, FormH1, FormButton,
        FormLabel, SignInLink, DropdownContent, 
        ValidationText} from './Form.elements';
import { Container } from '../globalStyles';
import axios from 'axios';

export default class DevsSignUp extends Component{

  state = {
    username: "",
    email: "",
    password: "",
    pass_valid_msg : "",
    valid : false,
    pass_msg: "",
    pass_match : false,
    type: ""
  };

  handleUsername = async (e) => {
    await this.setState({
      username : e.target.value
    })
  }


  handletype = async (e) => {
    await this.setState({
      type: e.target.value
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
    if (e.target.value.length < 8) {
      await this.setState({ pass_valid_msg : "Password mus contain at least 8 character" });
      await this.setState({ valid : false });
    } else {
      await this.setState({ pass_valid_msg : "Valid Password!" });
      await this.setState({ valid: true });
    }
  }

  handleConfirmation = async (e) => {
    if (e.target.value === this.state.password) {
      // Put something
      await this.setState({ pass_msg : "Password Match" });
      await this.setState({ pass_match : true });
    } else {
      await this.setState({ pass_msg : "Password not a Match!" });
      await this.setState({ pass_match : false });
    }
  }


  handleSubmit = e => {
    // Put Code Here for Signup

    let data = new FormData();
    data.append("username", this.state.username);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("type", this.state.type)

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
            <FormH1> Create your Developer Account </FormH1>
            <FormLabel htmlFor='for'> Username </FormLabel>
            <FormInput type='text' required onChange={ this.handleUsername }/>

            <FormLabel htmlFor='for'> Email </FormLabel>
            <FormInput type='email' required onChange={ this.handleEmail }/>

            <FormLabel htmlFor='for'> Password </FormLabel>
            <FormInput type='password' required onChange={ this.handlePassword }/>
            <ValidationText valid={this.state.valid} > { this.state.pass_valid_msg } </ValidationText>

            <FormLabel htmlFor='for'> Confirm Password </FormLabel>
            <FormInput type='password' required onChange={ this.handleConfirmation } />
            <ValidationText valid={this.state.pass_match} > { this.state.pass_msg } </ValidationText>

            <FormLabel> Group or Individual Developer </FormLabel>
            <DropdownContent onChange={this.handletype}>
              <option> -- Select Input --</option>
              <option> Individual </option>
              <option> Group </option>
            </DropdownContent>

            <FormButton to='/login' type='submit' onClick={this.handleSubmit}> SIGN UP </FormButton>
            <SignInLink to='/login'> Already have an account? </SignInLink>
          </Form>
        </Container>
      </>
    );
  }
}
