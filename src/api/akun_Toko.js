import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
});

const apis = {
    getAkunToko : () => api.get('/toko')
}
export default apis;