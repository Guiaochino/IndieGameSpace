import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles';
import {Games, Developers, DevsSignIn, DevsSignUp} from './pages/Index';
import { Navbar, Home, Sidebar, ScrollToTop, GameProfile, EditProfile, DevProfile, PublishForm }  from './components/Index';

function App() {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const [user, setUser] = useState();
  const [log, setLog] = useState(false);

  useEffect(() =>  {
    setUser(sessionStorage.getItem("user"));
    setLog(sessionStorage.getItem("logStatus"));
  }, [user]);

  return(
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} user={user} logStatus={log} />
      <Switch>
        
        <Route 
        exact 
        path='/' 
        render={(props) => (
          <Home {...props} logStatus={true} user={user} />
        )} />

        <Route path='/developers' component={Developers} />

        <Route 
        path='/login' 
        render={(props => (
          <DevsSignIn {...props} setUser={setUser} setLog={setLog} user={user} logStatus={log} />
        ))}
         />

        <Route path='/signup' component={DevsSignUp} />
        <Route path='/games' component={Games} />
        <Route path='/gameProfile' component={GameProfile} />
        {/* <Route path='/gameProfile2' component={GameProfile2} /> */}
        <Route 
        path='/Profile' 
        render={(props) => (
          <DevProfile {...props} />
        )} />

        <Route path='/publishGame' component={PublishForm} />
        <Route path='/editProfile' component={EditProfile} />

      </Switch>
    </Router>   
  );
}

export default App;
