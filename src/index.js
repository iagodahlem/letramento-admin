import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import Home from './containers/Home'
import Login from './containers/Login'
import Texts from './containers/Texts'
import { hasToken } from './services/authService'
import './index.css'

const store = configureStore()

const RoutePrivate = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    hasToken() ? (
      <Component {...props}/>
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
      <App>
        <Switch>
          <Route exact path='/login' component={Login} />
          <RoutePrivate exact path='/' component={Home} />
          <RoutePrivate exact path='/textos' component={Texts} />
          <RoutePrivate exact path='/textos/:id' component={Text} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
