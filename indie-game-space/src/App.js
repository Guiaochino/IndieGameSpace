import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles';
import {Games, Developers, DevsSignIn, DevsSignUp} from './pages/Index';
import { Navbar, Home, Sidebar, ScrollToTop, GameProfile, GameProfile2, DevProfile, PublishForm }  from './components/Index';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

function App() {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const [user, setUser] = useState();
  const [log, setLog] = useState(false);

  return(
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} logStatus={false} />
      <Switch>
        
        <Route 
        exact 
        path='/' 
        render={(props) => (
          <Home {...props} logStatus={true} user={user} />
        )} />

        <Route path='/developers' component={Developers} />
        <Route path='/devsSignIn' component={DevsSignIn} />
        <Route path='/devsSignUp' component={DevsSignUp} />
        <Route path='/games' component={Games} />
        <Route path='/gameProfile' component={GameProfile} />
        <Route path='/gameProfile2' component={GameProfile2} />
        <Route path='/Profile' component={DevProfile} />
        <Route path='/publishGame' component={PublishForm} />
      </Switch>
    </Router>   
  );
}

export default App;
