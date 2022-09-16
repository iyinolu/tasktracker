import axios from "axios";
import { BASE_URL } from ".";

export const loginService = async (payload: any) => {
  return axios.post(`${BASE_URL}api/token/`, payload)
};
