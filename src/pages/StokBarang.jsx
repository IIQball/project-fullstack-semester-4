import { useEffect, useState } from "react"
import AdminLayout from "../components/layout/AdminLayout"
import TabelStock from "../components/StokBarang/TabelStock"
import apis from "../api/stockBarang"
import { Link, useParams } from "react-router-dom"

const StokBarang = () => {

    const [dataStock, setDataStock] = useState([]);
    const [listToko, setListToko] = useState([]);
    const { idUser } = useParams();
    const [_namaToko, _setNamaToko] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            try{
                let resListToko = await apis.getListToko(idUser);
                let response = await apis.getAllStock(idUser);
                if(_namaToko){
                    response = await apis.getStockByToko(idUser,_namaToko);
                }
                
                setDataStock(response.data);
                setListToko(resListToko.data);

            }catch(err){
                console.log(err.message);
            }
        };
        fetchData();
    }, [_namaToko]);
    return(
        <>
            <AdminLayout>
                <div className="flex justify-between my-10">
                    <div className="bg-slate-300 flex items-center pl-4 rounded-md">
                        <label htmlFor="filter" className="text-xl font-semibold mr-1">Filter : </label>
                        <select name="filter" id="filter" className="p-3 pr-4 bg-slate-300 focus:outline-none text-lg font-semibold border-none appearance-none"
                        defaultValue={""}
                        onChange={(e)=>{_setNamaToko(e.target.value)}}>
                            <option value="" className="font-semibold">Semua Toko</option>
                            {listToko.map((toko, idx) => (
                                <option key={idx} value={toko.namaToko} className="font-semibold">{toko.namaToko}</option>
                            ))}
                        </select>
                    </div>
                    <Link to={`/${idUser}/edit-stok`}
                        className="py-4 px-4 bg-cyan-900 hover:bg-cyan-800 text-gray-200 hover:text-white font-medium rounded-md"
                    >
                        ATUR STOK BARANG
                    </Link>
                </div>
                <TabelStock dataStock={dataStock} />
            </AdminLayout>
        </>
    )
}

export default StokBarang