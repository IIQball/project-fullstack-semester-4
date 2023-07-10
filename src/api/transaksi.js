import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apist1 = {
    kurangiStok: (kodeBarang) => api.put('/transaksi/' + kodeBarang),
};

export default apist1;
