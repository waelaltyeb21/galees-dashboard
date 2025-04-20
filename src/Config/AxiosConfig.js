import axios from "axios";

axios.defaults.withCredentials = true;
const AxiosConfig = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});

export default AxiosConfig;
