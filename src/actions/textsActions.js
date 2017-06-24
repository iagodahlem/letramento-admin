import * as types from '../constants/actionTypes'
import * as textsService from '../services/textsService'
import { getTextsIsFetching } from '../reducers'
import history from '../history'

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

  return textsService.fetchTexts()
    .then(payload => dispatch(fetchTextsSuccess(payload)))
    .catch(error => dispatch(fetchTextsFailure(error)))
}

const showText = (id) => (dispatch, getState) => {
  const showTextRequest = () => ({
    type: types.TEXTS_SHOW_REQUEST,
  })

  const showTextSuccess = (payload) => ({
    type: types.TEXTS_SHOW_SUCCESS,
    payload,
  })

  const showTextFailure = (error) => ({
    type: types.TEXTS_SHOW_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(showTextRequest())

  return textsService.showText(id)
    .then(payload => dispatch(showTextSuccess(payload)))
    .catch(error => dispatch(showTextFailure(error)))
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

  return textsService.createText(text)
    .then(payload => dispatch(createSuccess(payload)))
    .then(() => history.push('/'))
    .catch(error => dispatch(createFailure(error)))
}

const updateText = (id, text) => (dispatch, getState) => {
  const updateRequest = () => ({
    type: types.TEXTS_UPDATE_REQUEST,
  })

  const updateSuccess = (payload) => ({
    type: types.TEXTS_UPDATE_SUCCESS,
    payload,
  })

  const updateFailure = (error) => ({
    type: types.TEXTS_UPDATE_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(updateRequest())

  return textsService.updateText(id, text)
    .then(payload => dispatch(updateSuccess(payload)))
    .then(() => history.push('/'))
    .catch(error => dispatch(updateFailure(error)))
}

export {
  fetchTexts,
  showText,
  createText,
  updateText,
}
