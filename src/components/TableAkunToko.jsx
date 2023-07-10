import axios from "axios";
import { useEffect, useState } from "react";
import PopupEdit from "./PopupEdit";
import apis from "../api/Editakun";

const TableAkunToko = ()=> {
    // const[listtokoo, setListtoko] = useState([]);
    const [data, setData] = useState([])
    const [editAkun, setEditAkun] = useState({});

    useEffect(()=> {
        // getListToko();
        // getListTokoId(idToko)

        const data = async()=>{
            try {
                const respon = await apis.getAkunToko()
                setData(respon.data)
                console.log(respon.data)
            } catch (error) {
                console.log(error)
            }
            

        }
        data()

    },[])

    // const getListToko = async() => {
    //     const responseget = await axios.get("http://localhost:5000/toko");
    //     setListtoko(responseget.data);
    //     console.log(responseget.data)
    // }

    // const getListTokoId = async(idToko) => {
    //     const responseget = await axios.get(`http://localhost:5000/toko/${idToko}`);
    //     setListtoko(responseget.data);
    // }

    // const updatetoko = async(updateid) => {
    //     try {
    //         await axios.update(`http://localhost:5000/update/${updateid}`);
    //         getListToko();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const deletetoko = async(deleteid) => {
        try {
            await axios.delete(`http://localhost:5000/toko/${deleteid}`);
            getListToko();
        } catch (error) {
            console.log(error);
        }
    }

    const edit = (listtokoo) => {
        setEditAkun(listtokoo);
        const form = document.querySelector(".input-edit");
        form.classList.remove("hidden");
    }

    return(
        <>  <PopupEdit editAkun={editAkun} setData={setData }/>
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-9">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-biru dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name Toko
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3 col-span-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((akun_toko,idx)=>(
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4" >
                                {idx+1}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {akun_toko.namaToko}
                            </td>
                            <td className="px-6 py-4">
                                {akun_toko.username}
                            </td>
                            <td className="px-6 py-4 ">
                                <input type="password"  className="focus:outline-none fa-solid fa-lock " 
                                value={akun_toko.password}/>
                            </td>
                            <td className="px-6 py-4">
                                <a onClick={() => edit(akun_toko)} className="mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a onClick={() => deletetoko(akun_toko.idToko)} className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Hapus</a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <PopupEdit editAkun={editAkun}/>
            </div>
        </>
    );
}
export default TableAkunToko;