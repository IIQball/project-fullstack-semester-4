import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials : true
});

const apis = {
    login: (data) => api.post('/login',data),
    register: (data) => api.post('/register',data),
    logout: () => api.get('logout')
};

export default apis;