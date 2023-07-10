import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apist = {
    insertTransaksi: (idUser,data) => api.post(`/${idUser}/transaksi`,data),
};

export default apist;
