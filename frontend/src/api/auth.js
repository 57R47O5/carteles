import request from "../api/requests";

const API_URL = "http://localhost:8000/api/";

export const register = (data) => request.post(`${API_URL}register/`, data);
export const login = (data) => request.post(`${API_URL}login/`, data);
export const logout = (data) => request.post(`${API_URL}logout/`, data);
export const check = ()=> request.get(`${API_URL}check-auth/`)