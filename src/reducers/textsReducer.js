import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_SUCCESS:
      return action.payload
    case types.TEXTS_FETCH_REQUEST:
    case types.TEXTS_FETCH_FAILURE:
      return []
    default:
      return state
  }
}

const text = (state = {}, action) => {
  switch (action.type) {
    case types.TEXTS_SHOW_SUCCESS:
    case types.TEXTS_UPDATE_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_REQUEST:
    case types.TEXTS_SHOW_REQUEST:
    case types.TEXTS_CREATE_REQUEST:
    case types.TEXTS_UPDATE_REQUEST:
      return true
    case types.TEXTS_FETCH_SUCCESS:
    case types.TEXTS_FETCH_FAILURE:
    case types.TEXTS_SHOW_SUCCESS:
    case types.TEXTS_SHOW_FAILURE:
    case types.TEXTS_CREATE_SUCCESS:
    case types.TEXTS_CREATE_FAILURE:
    case types.TEXTS_UPDATE_SUCCESS:
    case types.TEXTS_UPDATE_FAILURE:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_FAILURE:
    case types.TEXTS_SHOW_FAILURE:
    case types.TEXTS_CREATE_FAILURE:
    case types.TEXTS_UPDATE_FAILURE:
      return action.message
    case types.TEXTS_FETCH_REQUEST:
    case types.TEXTS_FETCH_SUCCESS:
    case types.TEXTS_SHOW_REQUEST:
    case types.TEXTS_SHOW_SUCCESS:
    case types.TEXTS_CREATE_REQUEST:
    case types.TEXTS_CREATE_SUCCESS:
    case types.TEXTS_UPDATE_REQUEST:
    case types.TEXTS_UPDATE_SUCCESS:
      return null
    default:
      return state
  }
}

const textsReducer = combineReducers({
  all,
  text,
  isFetching,
  errorMessage,
})

export default textsReducer

export const getTexts = (state) => state.all
export const getText = (state) => state.text
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
