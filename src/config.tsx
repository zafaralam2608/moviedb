import axios from 'axios'
import { API, API_KEY, BASE_URL } from './api'

const config = axios.create({
  baseURL: BASE_URL
})

config.defaults.params = {}
config.defaults.params[API] = API_KEY

export default config
