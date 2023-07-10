import AdminLayout from "../components/layout/AdminLayout"
import TabelListBarang from "../components/StokBarang/TabelListBarang"
import { Link, useParams } from "react-router-dom"


const ListBarang = () => {
    const {idUser} = useParams();
    return(
        <>
            <AdminLayout>
                <div className="flex justify-end my-10">
                    <Link to={`/${idUser}/tambah-barang`}>
                        <button
                            className="py-4 px-4 bg-cyan-900 hover:bg-cyan-800 text-gray-200 hover:text-white font-medium rounded-md"
                        >
                            + BARANG BARU
                        </button>
                    </Link>
                </div>
                <TabelListBarang/>
            </AdminLayout>
        </>
    )
}
export default ListBarang