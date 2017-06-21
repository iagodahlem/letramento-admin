import * as apiService from './apiService'

export const fetchTexts = () => apiService
  .get('/texts')
  .then(response => response.data)
