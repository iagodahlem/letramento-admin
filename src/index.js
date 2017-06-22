import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import Home from './containers/Home'
import Login from './containers/Login'
import TextsNew from './containers/TextsNew'
import TextsShow from './containers/TextsShow'
import { hasToken } from './services/authService'
import './index.css'

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
    <Router>
      <Switch>
        <RoutePublic exact path='/login' component={Login} />

        <RoutePrivate exact path='/' component={Home} />
        <RoutePrivate exact path='/textos/novo' component={TextsNew} />
        <RoutePrivate exact path='/textos/:id' component={TextsShow} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
