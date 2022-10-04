import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://serialatease.herokuapp.com/",
})


axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
)

module.exports = axiosInstance;