import axios from "axios";
import { baseURL } from "../constant/baseUrl";

export const instanceAxios = axios.create({
  baseURL,
  timeout: 1000,
  headers: { Accept: "application/json" },
});

// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
        
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );