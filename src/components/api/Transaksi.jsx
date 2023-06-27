import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getTransaksi: () => api.get('/transaksi', {withCredentials:true}),
    getTransaksibyId: (items) => api.get(`/transaksi${items}`,{withCredentials:true}),
    insertTransaksi: (items) => api.get(`/transaksi${items}`,{withCredentials:true}),
    updateTransaksi: (items) => api.get(`/transaksi/${items}`,{withCredentials:true}),
    deleteTransaksi: (items) => api.get(`/transaksi/${items}`,{withCredentials:true}),
}

export default apis;