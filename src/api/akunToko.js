import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials : true
});

const apis = {
    regAkunToko : (dataAkun) => api.post("http://localhost:5000/register", dataAkun)
}

export default apis;