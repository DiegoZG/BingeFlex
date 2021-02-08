import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import { Home, Browse, Sigin, Signup } from './pages'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
    <Route exact path="/user">
      <p>hello</p>
    </Route>
    <Route exact path="{ROUTES.HOME}">
      
    </Route>
    </Router>
  )
  
}

