import * as types from '../constants/actionTypes'
import * as textsService from '../services/textsService'
import { getTextsIsFetching } from '../reducers'

const fetchTexts = () => (dispatch, getState) => {
  const fetchTextsRequest = () => ({
    type: types.TEXTS_FETCH_REQUEST,
  })

  const fetchTextsSuccess = (payload) => ({
    type: types.TEXTS_FETCH_SUCCESS,
    payload,
  })

  const fetchTextsFailure = (error) => ({
    type: types.TEXTS_FETCH_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(fetchTextsRequest())

  return textsService.fetch()
    .then(payload => dispatch(fetchTextsSuccess(payload)))
    .catch(error => dispatch(fetchTextsFailure(error)))
}

const createText = (text) => (dispatch, getState) => {
  const createRequest = () => ({
    type: types.TEXTS_CREATE_REQUEST,
  })

  const createSuccess = (payload) => ({
    type: types.TEXTS_CREATE_SUCCESS,
    payload,
  })

  const createFailure = (error) => ({
    type: types.TEXTS_CREATE_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(createRequest())

  return textsService.create(text)
    .then(payload => dispatch(createSuccess(payload)))
    .catch(error => dispatch(createFailure(error)))
}

export {
  fetchTexts,
  createText,
}
