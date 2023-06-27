const RightBar = () => {
    const list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
    return(
        <>
            <div className="fixed right-0 top-0 h-full bg-white min-w-[25rem] border-l-2 drop-shadow-lg px-3 pb-24 overflow-y-auto">
                <div className="sticky z-20 top-0 pt-10 flex justify-between items-center text-lg font-bold text-slate-500 bg-white">
                    <h1>TAMBAH STOK</h1>
                    <select name="toko" id="toko"
                    className="border border-slate-400 py-2 px-4 rounded-sm focus:outline-none">
                        <option value="toko1">Toko 1</option>
                        <option value="toko2">Toko 2</option>
                    </select>
                </div>
                <div>
                    <table className="w-full text-left text-base">
                        <thead>
                            <tr>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2">Nama</th>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2">Jumlah</th>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(() => (
                                <tr className="border-b border-gray-400">
                                    <td scope="col" className="px-4 py-2">Kaos Polos</td>
                                    <td scope="col" className="px-4 py-2">
                                        <div className="flex">
                                            <button>
                                                <div className="border border-black px-1 rounded-full mr-2 active:bg-slate-500 h-6 w-6 flex items-center justify-center">
                                                    <p>−</p>
                                                </div>
                                            </button>
                                            <p>150</p>
                                            <button>
                                                <div className="border border-black px-1 rounded-full ml-2 active:bg-slate-500 h-6 w-6 flex items-center justify-center">
                                                    <p>+</p>
                                                </div>
                                            </button>
                                        </div>
                                    </td>
                                    <td scope="col" className="px-4 py-2">
                                        <button className="bg-red-500 text-white text-sm px-2 py-1 rounded-md active:bg-red-700">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            {/* tombol submit */}
            <div className=" fixed bottom-0 right-0 bg-white min-w-[25rem]">
                <div className="flex items-center justify-center border-t border-gray-500 py-5">
                    <button className="bg-blue-600 text-white text-xl px-4 py-2 rounded-md">Submit</button>
                </div>
            </div>
        </>
    )
}
export default RightBar