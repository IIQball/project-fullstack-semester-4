import { useEffect, useState } from "react"
import AdminLayout from "../components/layout/AdminLayout"
import NewTabelStock from "../components/StokBarang/NewTabelStock"
import apis from "../api/stockBarang"
import { Link, useParams } from "react-router-dom"
import EditDataStok from "../components/StokBarang/EditDataStok"

const NewStokBarang = () => {

    const [dataStock, setDataStock] = useState([]);
    const [listToko, setListToko] = useState([]);
    const { idUser } = useParams();
    const [_namaToko, _setNamaToko] = useState("");
    const [newData, setNewData] = useState([]);
    const [show, setShow] = useState(false);

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
    console.log(newData);
    return(
        <>
            <AdminLayout>
                <EditDataStok idUser={idUser} newData={newData} show={show} setShow={setShow} />
                <div className="p-4">
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
                        
                    </div>
                    <NewTabelStock dataStock={dataStock} setNewData={setNewData} setShow={setShow} />
                </div>
            </AdminLayout>
        </>
    )
}

export default NewStokBarang