import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, MainApp, Register } from '../../pages'

const Routes = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default Routes
