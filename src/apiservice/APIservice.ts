import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

const setAuthToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const fetchData = async (data: any) => {
  try {
    setAuthToken();
    console.log(data);
    const response = api.get("/");
    return response;
  } catch (e) {
    return { error: e };
  }
};

export default api;
