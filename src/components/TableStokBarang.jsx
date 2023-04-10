const TabelStokBarang = ({dataStok}) => {
    return(
        <>
            <div className="bg-white my-4 p-5 rounded-md">
                    <div className="rounded overflow-hidden">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-biru dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">No</th>
                                    <th scope="col" className="px-6 py-3">Gambar</th>
                                    <th scope="col" className="px-6 py-3">ID Produk</th>
                                    <th scope="col" className="px-6 py-3">Nama Barang</th>
                                    <th scope="col" className="px-6 py-3">Kategori</th>
                                    <th scope="col" className="px-6 py-3">Harga</th>
                                    <th scope="col" className="px-6 py-3">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataStok.map((data,idx)=>(
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td className="px-6 py-4">{idx+1}</td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4">{data.idProduk}</td>
                                    <td className="px-6 py-4">{data.namaBarang}</td>
                                    <td className="px-6 py-4">{data.kategori}</td>
                                    <td className="px-6 py-4">{data.harga}</td>
                                    <td className="px-6 py-4">{data.jumlah}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    )
}
export default TabelStokBarang