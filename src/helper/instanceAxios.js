import axios from "axios";
import { baseURL } from "../constant/baseUrl";

export const instanceAxios = axios.create({
  baseURL,
  timeout: 1000,
  headers: { Accept: "application/json" },
});

