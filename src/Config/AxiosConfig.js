import axios from "axios";

axios.defaults.withCredentials = true;
const AxiosConfig = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default AxiosConfig;
