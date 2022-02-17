import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Developers from './components/Developers';

function App() {
  return(
    <Router>
      <NavBar />
      <Home />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>   
  );
}

export default App;
