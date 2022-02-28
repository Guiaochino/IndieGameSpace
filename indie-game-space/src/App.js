import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
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

function App() {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  //games link on click (not working)
  // const history = useHistory();
  // const handleHistory1 = () => {
  //     history.push("/gamesProfile");
  // };

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
        <Route path='/games' component={Games} />
        <Route path='/gamesProfile' component={GameProfile} />
      </Switch>
    </Router>   
  );
}

export default App;
