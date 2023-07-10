import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apis from "../api/stockBarang";

const BuatTambahBarang = () => {
    const {idUser} = useParams();
    const [kodeBarang, setKode] = useState("");
    const [namaBarang, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [gambar, setGambar] = useState("");
    const [ukuran, setUkuran] = useState("");
    const [listToko, setListToko] = useState([]);
    const [idtoko, setIdToko] = useState("");
    const navigate = useNavigate();

    const Kirim = async(e) => {
        e.preventDefault();
        //  mencegah perilaku default

        if (!kodeBarang || !namaBarang || !harga  || !gambar || !ukuran) {
        alert("Data Masih Ada Yang Kosong")
        }

        const formData = new FormData();
        formData.append("kodeBarang", kodeBarang);
        formData.append("namaBarang", namaBarang);
        formData.append("harga", harga);
        formData.append("gambar", gambar);
        formData.append("ukuran", ukuran);
        formData.append("idToko", idtoko);
        
        const newStok = {"idToko": idtoko, "kodeBarang": kodeBarang}
        try {
            await axios.post(`http://localhost:5000/${idUser}/barang`, formData, {
                headers:{
                    "Content-Type" : "multipart/form-data"
                }
            });
            await axios.post(`http://localhost:5000/${idUser}/add-stok`, newStok)

            navigate(`/${idUser}/list-barang`);
            alert("Barang Berhasil Ditambahkan")
        } catch (error) {
            console.log(error);
        }
    };

    const loadImage = (e) => {
        // fungsi yang digunakan untuk mengambil gambar melalui input file
        const image = e.target.files[0];
        setGambar(image);
        // gambar disimpan dalam state gambar melalui setgambar
    };

    const fetchData = async() => {
        try{
            let resListToko = await apis.getListToko(idUser);
            setListToko(resListToko.data);
            setIdToko(resListToko.data[0].idToko)
        }catch(err){
            console.log(err.message);
        }
    };

    useEffect(()=>{
        try{
            fetchData();
        }catch(err){
            console.log(err)
        }
    },[])

    return(
        <div className= "fixed top-0 left-0 w-full h-full bg-gambar2 bg-no-repeat bg-center bg-cover">
            <div className="flex bg-biru  w-[1050px] py-10 m-auto">
                {/* Form Login */}
                <div className=" bg-gray-500 py-10 w-[700px] m-auto">
                    <h1 className="text-lg text-center font-bold leading-tight tracking-tight text-white md:text-4xl mb-5">
                        Tambah Barang Baru
                    </h1>
                    <form className="space-y-4 md:space-y-6 w-80 m-auto" onSubmit={Kirim}>
                        <div>
                            <label htmlFor="kode" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Kode
                            </label>
                            <input type="text" name="text" id="text" 
                            value={kodeBarang} onChange={(e) => setKode(e.target.value)}
                            //value digunakan untuk mengambil nilai terbaru
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="kode barang" required=""/>
                            
                            <label htmlFor="nama" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Nama 
                            </label>
                            <input type="text" name="text" id="text" placeholder="nama barang"
                            value={namaBarang} onChange={(e) => setNama(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="nama" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Toko 
                            </label>
                            <select name="toko" onChange={(e) => {setIdToko(e.target.value)}}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {listToko.map((item,idx) => {
                                    return(
                                        <option value={item.idToko}>{item.namaToko}</option>
                                    )
                                })}
                            </select>

                            <label htmlFor="harga" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Harga
                            </label>
                            <input type="number" name="number" id="number" placeholder="harga barang"
                            value={harga} onChange={(e) => setHarga(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="gambar" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Gambar
                            </label>
                            <input type="file"
                            // value={gambar} onChange={(e) => setGambar(e.target.value)}
                            onChange = {loadImage}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm pt-1.5
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="ukuran" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Ukuran
                            </label>
                            <input type="text" name="text" id="text" placeholder="ukuran barang" 
                            value={ukuran} onChange={(e) => setUkuran(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>

                        <div className="flex flex-row">

                            <Link to={`/${idUser}/list-barang`}>
                            <button type="submit" className=" w-full  text-white bg-red-700 hover:bg-red-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Kembali
                            </button>
                            </Link>
                            <p className="text-gray-500">--</p>
                            <button type="submit" className=" w-full  text-white bg-blue-700 hover:bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                            rounded-full text-md px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Tambah
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuatTambahBarang;