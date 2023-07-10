import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/toko",
    withCredentials : true
});

const apis = {
    login: (data) => api.post('/login',data),
    logout: () => api.get('logout')
};

export default apis;