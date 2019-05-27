import React from 'react';
import './App.css';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Default from './components/Default';

function App() {
  return (
    <div>
      <Navbar/>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Default}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
