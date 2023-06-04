const TabelStock = ({dataStock}) => {
    return(
        <>

            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-white uppercase bg-biru ">
                    <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Gambar</th>
                        <th scope="col" className="px-6 py-3">Toko</th>
                        <th scope="col" className="px-6 py-3">ID Produk</th>
                        <th scope="col" className="px-6 py-3">Nama Barang</th>
                        <th scope="col" className="px-6 py-3">Ukuran</th>
                        <th scope="col" className="px-6 py-3">Harga</th>
                        <th scope="col" className="px-6 py-3">Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    {dataStock.map((data,idx)=>(
                    <tr className="bg-white border-b text-base font-medium odd:bg-gray-100">
                        <td className="px-6 py-4">{idx+1}</td>
                        <td className="px-6 py-4">
                            <img src={`/src/img/${data.gambar}`}  className="w-20 h-20"/>
                        </td>
                        <td className="px-6 py-4">{data.toko}</td>
                        <td className="px-6 py-4">{data.idProduk}</td>
                        <td className="px-6 py-4">{data.namaBarang}</td>
                        <td className="px-6 py-4">{data.ukuran}</td>
                        <td className="px-6 py-4">{data.harga}</td>
                        <td className="px-6 py-4">{data.jumlah}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default TabelStock