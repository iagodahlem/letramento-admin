import * as apiService from './apiService'

const TOKEN = 'TOKEN'

const login = (credentials) => apiService
  .post('/login', { auth: credentials })
  .then(response => response.data.jwt)

const getToken = () => sessionStorage.getItem(TOKEN)

const hasToken = () => !!getToken()

const setToken = (token) => {
  sessionStorage.setItem(TOKEN, token)
  return token
}

const setHeaders = () => ({
  'Authorization': `Bearer ${getToken()}`
})

export {
  login,
  getToken,
  hasToken,
  setToken,
  setHeaders,
}
