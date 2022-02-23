import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return(
    <Router>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>   
  );
}

export default App;
