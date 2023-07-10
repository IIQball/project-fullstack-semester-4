const NewTabelStock = ({ dataStock, setNewData, setShow }) => {
    const handleEditBtn = (idx) => {
        setNewData(dataStock[idx])
        setShow(true)
    }
    return(
        <>
            <table className="w-full text-sm text-left text-gray-500 rounded-md overflow-hidden shadow-md mb-10">
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
                        <th scope="col" className="px-6 py-3">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {dataStock.map((data,idx)=>(
                    <tr className="bg-white border-b border-x-2 text-base font-medium odd:bg-gray-100"
                    key={idx}
                    >
                        <td className="px-6 py-4">{idx+1}</td>
                        <td className="px-6 py-4">
                            <img src={`/src/img/img1.jpeg`}  className="w-20 h-20"/>
                        </td>
                        <td className="px-6 py-4">{data.namaToko}</td>
                        <td className="px-6 py-4">{data.kodeBarang}</td>
                        <td className="px-6 py-4">{data.namaBarang}</td>
                        <td className="px-6 py-4">{data.ukuran}</td>
                        <td className="px-6 py-4">{data.harga}</td>
                        <td className="px-6 py-4">{data.stok}</td>
                        <td className="px-6 py-4">
                            <button onClick={()=> {handleEditBtn(idx)}}>
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/FAB005/external-edit-mintab-for-ios-becris-lineal-becris.png"
                            alt="edit-icon"
                            className="h-6 w-6" />
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default NewTabelStock