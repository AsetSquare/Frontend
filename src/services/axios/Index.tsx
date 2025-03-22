import axios from "axios";
const BASE_URL = "https://devnet.assetsquare.xyz/v1";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});
