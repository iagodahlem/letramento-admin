import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

export const get = (url) => axios
  .get(`${BASE_URL}${url}`)

export const post = (url, data) => axios
  .post(`${BASE_URL}${url}`, data)
