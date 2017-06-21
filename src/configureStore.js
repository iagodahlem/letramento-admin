import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import * as authService from './services/authService'

const initialState = {
  texts: {
    all: [],
    isFetching: false,
    errorMessage: null,
  },
  auth: {
    token: authService.hasToken(),
    isFetching: false,
    errorMessage: null,
  },
}

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

  return store
}

export default configureStore
