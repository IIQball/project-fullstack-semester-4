const Content = () => {
    return(
        <>
            <div className="bg-slate-100 col-span-10 row-span-5 p-5">
                <div className="flex space-x-0 justify-between">
                    <div className="bg-white w-fit p-2 rounded-md">
                    <label htmlFor="namaToko">Filter :</label>
                    <select name="namaToko" id="namaToko" className="p-2 ml-2 focus:outline-none">
                        <option value="all">Semua Toko</option>
                        <option value="tokoA">Toko A</option>
                        <option value="tokoB">Toko B</option>
                    </select>

                    </div>
                    <a href="#" className="bg-green-300 font-semibold text-white flex p-2 rounded-md"><span className="m-auto"><span className="text-lg">+</span> Stok Barang</span></a>
                </div>
            </div>
        </>
    )
}
export default Content