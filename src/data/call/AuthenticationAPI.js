import axios from "axios";

export const AuthenticationAPI = {
  login: ({ user_code, password }) =>
    axios.post(`/login`, { user_code, password }),

  registerCookie: () => axios.get(`/sanctum/csrf-cookie`),
};
