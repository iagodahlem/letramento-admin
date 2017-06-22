import * as types from '../constants/actionTypes'
import * as authService from '../services/authService'
import { getAuthIsFetching } from '../reducers'

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
    .catch(error => dispatch(loginFailure(error)))
}

export const logout = () => {
  authService.removeToken()

  return {
    type: types.LOG_OUT,
  }
}
