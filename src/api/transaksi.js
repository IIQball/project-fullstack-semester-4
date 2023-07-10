import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apist1 = {
    kurangiStok: (kodeBarang, idUser) => api.put('/transaksi/' + kodeBarang, idUser),
};

export default apist1;
