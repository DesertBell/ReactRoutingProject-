import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
//import App from './components/App';
import Header from './components/Header';
import Home from './screens/Home';
import {default as Search} from './screens/Search';
import About from './screens/About';
import Repos from './screens/Repos';
import Contact from './screens/Contact';

render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>
), document.getElementById('root')
)