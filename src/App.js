import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/Portfolio/#/projects" component={Projects}/>
          <Route path="/Portfolio/#/contact" component={Contact}/>
          <Route component={Default}/>
        </Switch>
    </div>
  );
}

export default App;
