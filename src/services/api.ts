import axios from "axios";

export const api = axios.create({
  baseURL: "https://refund-api.vercel.app",
});
