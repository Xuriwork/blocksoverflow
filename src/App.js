import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import AskQuestion from './components/AskQuestion/AskQuestion';
import Header from './components/Header';

import './App.scss';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='site-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/ask-question' component={AskQuestion} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
