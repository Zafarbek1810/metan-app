import axios from "axios";
import Message from "../utils/Message";

// export const API_URL = "http://178.159.39.206:3000";
export const API_URL = "https://shark-app-4lfv8.ondigitalocean.app";
// export const API_URL = "http://192.168.1.6:3001";

const client = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

client.interceptors.request.use((config) => {
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config;
})
client.interceptors.response.use((config) => {
  return config;
}, (error) => {
  if (error.response.status === 401) {
    Message.unauthorizedError();
    localStorage.removeItem("token");
    throw error;
  }
  throw error;
})

export default client;