import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000/"
});

const apis = {
    regDataBrg : () => api.get("http://localhost:5000/barang"),
    editBrg : (dataBrg) => api.post("http://localhost:5000/barang", dataBrg)
}

export default apis;