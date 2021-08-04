import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'routes/Home'
import Auth from 'routes/Auth'
import Navigation from 'components/Navigation'
import Profile from 'routes/Profile'
import Test from 'routes/Test'

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
  return (
    <Router>
      { isLoggedIn && <Navigation userObj={ userObj } /> }
      <Switch>
        { isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={ userObj } />
            </Route>
            <Route exact path="/profile">
              <Profile refreshUser={ refreshUser } userObj={ userObj } />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>
          </>
        ) : (
            <Route exact path="/">
              <Auth />
            </Route>
          )
        }
      </Switch>
    </Router>
  )
}
export default AppRouter