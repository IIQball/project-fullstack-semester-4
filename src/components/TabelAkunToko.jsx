import React, {useState, useEffect} from "react";
import axios from "axios";

const TabelAkunToko = () => {
    const[listtokoo, setListtoko] = useState([]);

    useEffect(()=> {
        getListToko();
    })

    const getListToko = async() => {
        const responseget = await axios.get("http://localhost:5000/toko");
        setListtoko(responseget.data);
    }

    const deletetoko = async(deleteid) => {
        try {
            await axios.delete(`http://localhost:5000/toko/${deleteid}`);
            getListToko();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
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
                            UserName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" className="px-6 py-3 col-span-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3 col-span-3">
                            Hapus
                        </th>
                    </tr>
                </thead>
                <tbody>
                {listtokoo.map((akun_toko,idx) => (
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
                        <td className="px-6 py-4">
                            {akun_toko.password}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>                            
                        </td>
                        <td>
                            <a onClick={() => deletetoko(akun_toko.idToko)} className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Hapus</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}

export default TabelAkunToko;