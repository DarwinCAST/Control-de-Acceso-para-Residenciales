import axios from "axios";

const API_URL = "http://localhost:8000/api";

export interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    res.data.token;
    return res.data;
  } catch (error) {
    console.error("Error al iniciar sesion", error);
  }
};
