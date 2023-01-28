import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://192.168.2.20:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
