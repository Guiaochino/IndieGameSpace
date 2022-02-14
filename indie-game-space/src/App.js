import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Developers from './pages/Developers';

function App() {
  return(
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/devs' exact component={Developers} />
      </Switch>
    </Router>   
  );
}

export default App;
