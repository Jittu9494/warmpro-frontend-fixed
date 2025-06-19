import axios from "axios";

const api = axios.create({
  baseURL: "https://warmpro-api.onrender.com", // Your backend
});

export default api;
