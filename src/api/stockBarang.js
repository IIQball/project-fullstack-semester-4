import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000/"
});

const apis = {
    getAllStock : (idUser) => api.get(`/${idUser}/stok-barang`),
    getStockByToko : (idUser,namaToko) => api.get(`/${idUser}/stok-barang/${namaToko}`),
    getListToko : (idUser) => api.get(`${idUser}/list-toko`),
    updateStok : (idUser, newData) => api.post(`/${idUser}/update-stok`, newData)
};

export default apis;