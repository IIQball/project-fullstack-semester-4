import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000/"
});

const apis = {
    regDataBrg : (idUser) => api.get(`http://localhost:5000/${idUser}/barang`),
    editBrg : (dataBrg) => api.post("http://localhost:5000/barang", dataBrg)
}

export default apis;