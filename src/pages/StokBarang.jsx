import AdminLayout from "../components/layout/AdminLayout"
import TabelStock from "../components/StokBarang/TabelStock"

const StokBarang = () => {
    const dataStock = [
        {
            "toko" : "Toko A",
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "ukuran" : "L",
            "harga" : 50000,
            "jumlah" : 50,
            "gambar" : "img1.jpeg"
        },
        {
            "toko" : "Toko A",
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "ukuran" : "L",
            "harga" : 50000,
            "jumlah" : 50,
            "gambar" : "img1.jpeg"
        },
        {
            "toko" : "Toko A",
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "ukuran" : "L",
            "harga" : 50000,
            "jumlah" : 50,
            "gambar" : "img1.jpeg"
        },
        {
            "toko" : "Toko A",
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "ukuran" : "L",
            "harga" : 50000,
            "jumlah" : 50,
            "gambar" : "img1.jpeg"
        },
        {
            "toko" : "Toko A",
            "idProduk" : "B01",
            "namaBarang" : "Kaos Polos",
            "ukuran" : "L",
            "harga" : 50000,
            "jumlah" : 50,
            "gambar" : "img1.jpeg"
        },
    ]

    return(
        <>
            <AdminLayout>
                <div className="flex justify-end my-10">
                    <button
                        className="py-4 px-4 bg-cyan-900 hover:bg-cyan-800 text-gray-200 hover:text-white font-medium rounded-md"
                    >
                        + STOCK BARANG
                    </button>
                </div>
                <TabelStock dataStock={dataStock} />
            </AdminLayout>
        </>
    )
}

export default StokBarang