import React, { Component } from 'react';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import About from './Pages/AboutMe';
import Contact from './Pages/Contact';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Portfolio}/>
          <Route path='/homepage' component={Homepage}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/aboutme' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
