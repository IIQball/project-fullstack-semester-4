import { useState } from "react"
import TabelStokBarang from "./TableStokBarang"

const Content = () => {
    
    // state data stok
    const [dataStok,setDataStok] = useState([
        {
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "kategori" : "KAOS",
            "harga" : 50000,
            "jumlah" : 50
        }
    ])

    // state input data
    const [IdProduk,setIdProduk] = useState('')
    const [NamaBarang,setNamaBarang] = useState('')
    const [Kategori,setKategori] = useState('')
    const [Harga,setHarga] = useState(0)
    const [Jumlah,setJumlah] = useState(0)

    // function button tambah stok
    const tambahStok = ()=>{
        setDataStok([...dataStok,{"idProduk" : IdProduk, "namaBarang":NamaBarang,"kategori":Kategori,"harga":Harga,"jumlah":Jumlah}])
    }

    console.log(dataStok)
    return(
        <>
            {/* container */}
            <div className="bg-slate-100 col-span-10 row-span-5 p-5">

                {/* form */}
                <div className="flex flex-col bg-white rounded-md p-5">
                    <input type="text" value={IdProduk} placeholder="ID Produk" className="border-2 shadow-sm rounded-md p-2 mt-2 focus:outline-none focus:border-green-300"
                    onChange={(e)=>(setIdProduk(e.target.value))}
                    />
                    <input type="text" value={NamaBarang} placeholder="Nama Barang" className="border-2 shadow-sm rounded-md p-2 mt-2 focus:outline-none focus:border-green-300"
                    onChange={(e)=>(setNamaBarang(e.target.value))}
                    />
                    <input type="text" value={Kategori} placeholder="Kategori" className="border-2 shadow-sm rounded-md p-2 mt-2 focus:outline-none focus:border-green-300"
                    onChange={(e)=>(setKategori(e.target.value))}
                    />
                    <input type="number" value={Harga} placeholder="Harga" className="border-2 shadow-sm rounded-md p-2 mt-2 focus:outline-none focus:border-green-300"
                    onChange={(e)=>(setHarga(e.target.value))}
                    />
                    <input type="number" value={Jumlah} placeholder="Jumlah" className="border-2 shadow-sm rounded-md p-2 mt-2 focus:outline-none focus:border-green-300"
                    onChange={(e)=>(setJumlah(e.target.value))}
                    />

                    {/* Button */}
                    <div className="flex justify-end space-x-0 mt-5">
                        <button className="bg-green-400 font-semibold text-white flex p-2 rounded-md" onClick={tambahStok}><span className="m-auto"><span className="text-lg">+</span> Stok Barang</span></button>
                    </div>
                </div>

                {/* tabel */}
                <TabelStokBarang dataStok = {dataStok}/>
            </div>
        </>
    )
}
export default Content