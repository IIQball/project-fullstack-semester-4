import { useEffect, useState } from "react"
import AdminLayout from "../components/layout/AdminLayout"
import TabelStock from "../components/StokBarang/TabelStock"
import apis from "../api/stockBarang"
import { useParams } from "react-router-dom"

const StokBarang = () => {

    const [dataStock, setDataStock] = useState([]);
    const { idUser } = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try{
                let response = await apis.getAllStock(idUser);
                setDataStock(response.data);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

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