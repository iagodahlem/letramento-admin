import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import textsReducer, * as fromTexts from './textsReducer'
import authReducer, * as fromAuth from './authReducer'

const rootReducer = combineReducers({
  texts: textsReducer,
  auth: authReducer,
  form: formReducer,
})

export default rootReducer

export const getTexts = (state) => fromTexts.getTexts(state.texts)
export const getTextsIsFetching = (state) => fromTexts.getIsFetching(state.texts)
export const getTextsErrorMessage = (state) => fromTexts.getErrorMessage(state.texts)

export const getAuthToken = (state) => fromAuth.getToken(state.auth)
export const getAuthIsFetching = (state) => fromAuth.getIsFetching(state.auth)
