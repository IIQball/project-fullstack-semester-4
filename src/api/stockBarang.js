import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000/"
});

const apis = {
    getAllStock : (idUser) => api.get(`/${idUser}/stok-barang`)
};

export default apis;