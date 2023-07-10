import React, {useState, useEffect} from "react";
import axios from "axios";

const BuatEditBarang = ({editBrg, setData}) => {
    const [kodeBarang, setKode] = useState("");
    const [namaBarang, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [gambar, setGambar] = useState("");
    const [ukuran, setUkuran] = useState("");

    useEffect(() => {
        setKode(editBrg.kodeBarang)
        setNama(editBrg.namaBarang)
        setHarga(editBrg.harga)
        setGambar(editBrg.gambar)
        setUkuran(editBrg.ukuran)
    }, [editBrg]);

    const Edit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("kodeBarang", kodeBarang);
        formData.append("namaBarang", namaBarang);
        formData.append("harga", harga);
        formData.append("gambar", gambar);
        formData.append("ukuran", ukuran);

        try {
            await axios.put(`http://localhost:5000/barang/${editBrg.kodeBarang}`,formData)

            setData((prev) => prev.map((data) => {
                if(data.kodeBarang === editBrg.kodeBarang) {
                    data.kodeBarang = kodeBarang
                    data.namaBarang = namaBarang
                    data.harga = harga
                    data.gambar = gambar
                    data.ukuran = ukuran
                    return data
                }
                return data
            }))
            hideForm();
        } catch (error) {
            console.error(error);
        }
    };

    const hideForm = () => {
        const close = document.querySelector(".input-edit");
        close.classList.add("hidden");
    }

    return(
        <div className= "input-edit hidden fixed top-0 left-0 w-full h-full bg-gambar2 bg-no-repeat bg-center bg-cover">
            <div className="flex bg-biru  w-[1050px] py-10 m-auto">
                {/* Form Login */}
                <div className=" bg-gray-500 py-10 w-[700px] m-auto">
                    <h1 className="text-lg text-center font-bold leading-tight tracking-tight text-white md:text-4xl mb-5">
                        Edit Barang 
                    </h1>
                    <form className="space-y-4 md:space-y-6 w-80 m-auto" onSubmit={Edit}>
                        <div>
                            <label htmlFor="kode" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Kode
                            </label>
                            <input type="text" name="text" id="text" 
                            defaultValue={kodeBarang} onChange={(e) => setKode(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="kode barang" required=""/>
                            
                            <label htmlFor="nama" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Nama 
                            </label>
                            <input type="text" name="text" id="text" placeholder="nama barang"
                            defaultValue={namaBarang} onChange={(e) => setNama(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="harga" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Harga
                            </label>
                            <input type="number" name="number" id="number" placeholder="harga barang"
                            defaultValue={harga} onChange={(e) => setHarga(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="gambar" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Gambar
                            </label>
                            <input type="file" name="file" id="file"
                            defaultValue={gambar} onChange={(e) => setGambar(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm pt-1.5
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                            <label htmlFor="ukuran" className="mt-3 block text-lg font-medium text-white dark:text-white"
                            >
                                Ukuran
                            </label>
                            <input type="text" name="text" id="text" placeholder="ukuran barang" 
                            defaultValue={ukuran} onChange={(e) => setUkuran(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                            rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>

                        <button type="submit" className=" w-full  text-white bg-blue-700 hover:bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-full text-md px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuatEditBarang;