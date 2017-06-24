import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history'
import configureStore from './store/configureStore'
import App from './components/App'
import Home from './containers/Home'
import Login from './containers/Login'
import TextsNew from './containers/TextsNew'
import TextsShow from './containers/TextsShow'
import { hasToken } from './services/authService'

const store = configureStore()

const RoutePublic = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <App>
      <Component {...props}/>
    </App>
  )}/>
)

const RoutePrivate = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    hasToken() ? (
      <App isPrivate={true}>
        <Component {...props}/>
      </App>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <RoutePublic exact path='/login' component={Login} />
        <RoutePrivate exact path='/' component={Home} />
        <RoutePrivate exact path='/textos/novo' component={TextsNew} />
        <RoutePrivate exact path='/textos/:id' component={TextsShow} />
      </Switch>
    </Router>
  </Provider>
)

export default routes
