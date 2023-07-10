import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials : true
});

const apis = {
    regAkunToko : (dataAkun) => api.post("/akuntoko/register", dataAkun),
    login : (dataAkun) => api.post("/akuntoko/login", dataAkun)
}

export default apis;