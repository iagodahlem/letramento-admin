import * as types from '../constants/actionTypes'
import * as authService from '../services/authService'
import { getAuthIsFetching } from '../reducers'
import history from '../history'

export const login = (credentials) => (dispatch, getState) => {
  const loginRequest = () => ({
    type: types.LOG_IN_REQUEST,
  })

  const loginSuccess = () => ({
    type: types.LOG_IN_SUCCESS,
  })

  const loginFailure = (error) => ({
    type: types.LOG_IN_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getAuthIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(loginRequest())

  return authService.login(credentials)
    .then(payload => authService.setToken(payload))
    .then(token => dispatch(loginSuccess(token)))
    .then(() => history.push('/'))
    .catch(error => dispatch(loginFailure(error)))
}

export const logout = () => {
  authService.removeToken()
  history.push('/login')

  return {
    type: types.LOG_OUT,
  }
}
