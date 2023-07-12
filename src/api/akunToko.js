import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials : true
});

const apis = {
    regAkunToko : (idUser,dataAkun) => api.post(`/${idUser}/akuntoko/register`, dataAkun),
    login : (idUser,dataAkun) => api.post(`/${idUser}/akuntoko/login`, dataAkun)
}

export default apis;