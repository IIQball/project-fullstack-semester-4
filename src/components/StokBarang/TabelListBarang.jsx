import React, {useState, useEffect} from "react"
import axios from "axios"
import BuatEditBarang from "../BuatEditBarang";
import apis from "../../api/dataBarang";
import { useParams } from "react-router-dom";


const TabelListBarang = ({}) => {
    const {idUser} = useParams();
    const[listbrg, setListbrg] = useState([]);
    const[editbrg, setEditbrg] = useState({});
    const[data, setData] = useState([]);

    useEffect(()=> {
        const data = async() => {
            try {
                const respon = await apis.regDataBrg(idUser)
                setData(respon.data)
                console.log(respon.data)
            } catch (error) {
                console.log(error)
            }
        }
        data()
    }, [])

    const deletebrg = async(deleteid) => {
        try {
            await axios.delete(`http://localhost:5000/barang/${deleteid}`);
            location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const edit = (listbrg) => {
        setEditbrg(listbrg);
        const form = document.querySelector(".input-edit");
        form.classList.remove("hidden");
    }

    return(
        <>
        <BuatEditBarang editBrg={editbrg} setData={setData}/>
        <div className="m-5">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-white uppercase bg-biru ">
                    <tr>
                        <th scope="col" className="px-4 py-3">No</th>
                        <th scope="col" className="px-4 py-3">Kode Barang</th>
                        <th scope="col" className="px-4 py-3">Nama Barang</th>
                        <th scope="col" className="px-4 py-3">harga</th>
                        <th scope="col" className="px-4 py-3">gambar</th>
                        <th scope="col" className="px-4 py-3">ukuran</th>
                        <th scope="col" className="px-4 py-3">Edit</th>
                        <th scope="col" className="px-4 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data_barang,idx) => (
                    <tr className="bg-white border-b text-base font-medium odd:bg-gray-100">
                        <td className="px-4 py-4">{idx+1}</td>
                        <td className="px-4 py-4">{data_barang.kodeBarang}</td>
                        <td className="px-4 py-4">{data_barang.namaBarang}</td>
                        <td className="px-4 py-4">{data_barang.harga}</td>
                        <td className="px-4 py-4">
                            <img src={data_barang.url}  className="w-20 h-20"/>
                        </td>
                        <td className="px-4 py-4">{data_barang.ukuran}</td>
                        <td>
                            <a onClick={() => edit(data_barang)} className="cursor-pointer mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>                            
                        </td>
                        <td>
                            <a onClick={() => deletebrg(data_barang.kodeBarang)} className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Delete</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default TabelListBarang