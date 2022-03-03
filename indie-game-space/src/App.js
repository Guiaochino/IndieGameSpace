import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';
import Games from './pages/Games';
import Developers from './pages/Developers';
import ScrollToTop from './components/ScrollToTop';
import DevsSignIn from './pages/DevsSignIn';
import GameProfile from './components/GameProfile/GameProfile';
import DevsSignUp from './pages/DevsSignUp';
import DevProfile from './components/DevProfile/DevProfile';

function App() {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return(
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/developers' component={Developers} />
        <Route path='/devsSignIn' component={DevsSignIn} />
        <Route path='/devsSignUp' component={DevsSignUp} />
        <Route path='/games' component={Games} />
        <Route path='/gameProfile' component={GameProfile} />
        <Route path='/DevProfile' component={DevProfile} />
      </Switch>
    </Router>   
  );
}

export default App;
