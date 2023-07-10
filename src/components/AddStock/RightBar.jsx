import { useEffect, useState } from "react"

const RightBar = ({ listToko, setNamaToko, newStok }) => {
    const listItem = [1,2,3,4]
    return(
        <>
            <div className="fixed right-0 top-0 h-full bg-white min-w-[25rem] border-l-2 drop-shadow-lg px-3 pb-24 overflow-y-auto">
                <div className="sticky z-20 top-0 pt-10 flex justify-between items-center text-lg font-bold text-slate-500 bg-white">
                    <h1>EDIT STOK</h1>
                    <select name="toko" id="toko"
                    onChange={(e)=>{setNamaToko(e.target.value)}}
                    className="border border-slate-400 py-2 px-4 rounded-sm focus:outline-none"
                    >
                        {listToko.map((toko,idx)=>(
                            <option key={idx} value={toko.namaToko}>{toko.namaToko}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <table className={`w-full text-left text-base`}>
                        <thead>
                            <tr className="text-center">
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2">Nama</th>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2">Size</th>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2">Jumlah</th>
                                <th scope="col" className="sticky top-[5.2rem] bg-white z-10 px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem.map((idx) => {
                                const [_jumlah, _setJumlah] = useState(100);
                                return(
                                    <tr key={idx} className="border-b border-gray-400">
                                        <td scope="col" className="px-4 py-2">Kaos Polos</td>
                                        <td scope="col" className="px-4 py-2">M</td>
                                        <td scope="col" className="px-4 py-2 max-w-[6rem]">
                                            <div className="flex flex-col">
                                                <input type="number" value={_jumlah} onChange={(e)=> _setJumlah(e.target.value)} 
                                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                                text-center border border-black outline-none"/>
                                                <input type="range" name="jumlah" min={0} max={1000} value={_jumlah} step={1} 
                                                onChange={(e)=> _setJumlah(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td scope="col" className="px-4 py-2">
                                            <button className="bg-red-500 text-white text-sm px-2 py-1 rounded-md active:bg-red-700">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
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