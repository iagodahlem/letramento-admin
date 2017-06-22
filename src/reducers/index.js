import { combineReducers } from 'redux'
import texts, * as fromTexts from './textsReducer'
import auth, * as fromAuth from './authReducer'

const rootReducer = combineReducers({
  texts,
  auth,
})

export default rootReducer

export const getTexts = (state) => fromTexts.getTexts(state.texts)
export const getText = (state) => fromTexts.getText(state.texts)
export const getTextsIsFetching = (state) => fromTexts.getIsFetching(state.texts)
export const getTextsErrorMessage = (state) => fromTexts.getErrorMessage(state.texts)

export const getAuthToken = (state) => fromAuth.getToken(state.auth)
export const getAuthIsFetching = (state) => fromAuth.getIsFetching(state.auth)
