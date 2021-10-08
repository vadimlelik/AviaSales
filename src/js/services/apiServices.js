import axios from 'axios'
import config from '../config/apiConfig'



class Api {
  constructor(config) {
    this.url = config.url
  }
  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`)
      return response.data

      console.log(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error)
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`)
      return response.data

      console.log(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error)
    }
  }
  prices(params) { }

}

const api = new Api(config)
export default api;