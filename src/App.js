import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
      <Route exact path="/signin">
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    </Route>
    </Router>
  )
  
}

