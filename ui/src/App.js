import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Explore from './components/pages/Explore/Explore';

function App() {

  return(
    <Router> 
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/explore' exact component={Explore}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;