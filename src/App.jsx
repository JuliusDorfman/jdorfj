import React, { Component } from 'react';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import About from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route path='/homepage' component={Homepage} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/aboutme' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
