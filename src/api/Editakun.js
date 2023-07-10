import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000"
})

const apis = {
    getAkunToko : (idUser) => api.get(`/${idUser}/toko`),
    editAkunToko : (dataAkun) => api.post("http://localhost:5000/update", dataAkun)
}

export default apis;