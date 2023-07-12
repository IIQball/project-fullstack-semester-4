import TableAkunToko from "../components/TabelAkunToko";
import AdminLayout from "../components/layout/AdminLayout";
import { Link, useParams } from "react-router-dom";

const AkunToko = () => {
    const {idUser} = useParams();
    return(
        <>
            <AdminLayout>
                <div className="mx-5">
                    <div className="mt-6 flex justify-end py-2 ml-2">
                        <Link to={`/${idUser}/buat-akun-toko`}>
                        <button type="submit" className=" text-white mr-4 bg-[#2A628F] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Buat Akun Toko
                        </button>
                        </Link>
                        <Link to={`/${idUser}/login-aplikasi-kasir`}>
                        <button type="submit" className=" text-white bg-[#2A628F] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Login aplikasi kasir
                        </button>
                        </Link>
                    </div>
                    <TableAkunToko />
                    
                </div>
            </AdminLayout>
            
            
        </>
    )
}
export default AkunToko;