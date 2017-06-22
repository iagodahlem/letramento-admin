import { combineReducers } from 'redux'
import { hasToken } from '../services/authService'
import * as types from '../constants/actionTypes'

const token = (state = false, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
    case types.LOG_OUT:
      return hasToken()
    case types.LOG_IN_REQUEST:
    case types.LOG_IN_FAILURE:
      return false
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.LOG_IN_REQUEST:
      return true
    case types.LOG_IN_SUCCESS:
    case types.LOG_IN_FAILURE:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.LOG_IN_FAILURE:
      return action.message
    case types.LOG_IN_REQUEST:
    case types.LOG_IN_SUCCESS:
      return null
    default:
      return state
  }
}

const authReducer = combineReducers({
  token,
  isFetching,
  errorMessage,
})

export default authReducer

export const getToken = (state) => state.token
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
