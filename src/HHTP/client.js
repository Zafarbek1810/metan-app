import axios from "axios";
import Message from "../utils/Message";

export const API_URL = "http://6842-213-230-80-46.ngrok.io";

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
  if (error.response === undefined) {
    Message.unauthorizedError();
    localStorage.removeItem("token");
    throw error;
  }
  throw error;
})

export default client;