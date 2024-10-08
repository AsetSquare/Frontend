import axios from "axios";
const BASE_URL = "https://api.assetsquare.xyz/devnet/v1";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});
