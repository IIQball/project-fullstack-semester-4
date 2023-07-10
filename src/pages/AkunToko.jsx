import { Link } from "react-router-dom";
import TableAkunToko from "../components/TableAkunToko";
import AdminLayout from "../components/layout/AdminLayout";
const AkunToko = () => {
    return(
        <>
            <AdminLayout>
                <div className="">
                    <div className="mt-6 flex justify-end py-2 px-4">
                        <Link to="/1/buat-akun-toko">
                        <button type="submit" className=" text-white bg-[#2A628F] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-full text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Buat Akun Toko
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