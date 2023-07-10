import { useEffect, useState } from "react"
import apis from "../../api/stockBarang";
import { useNavigate } from "react-router-dom";

const EditDataStok = ({ idUser, newData, show, setShow }) => {
    const navigation = useNavigate();
    const [newStok, setNewStok] = useState(0);

    const handleSubmit = async() => {
        const updateData = {
            "idToko": newData.idToko,
            "kodeBarang": newData.kodeBarang,
            "stok": newStok
        }
        try{
            await apis.updateStok(idUser, updateData);
            alert("Data berhasil ditambah ");
            setShow(false);
            location.reload();
            // navigation(`/${idUser}/new-stok-barang`);
        }catch(err){console.log(err)}
    }

    const plus1 = () => {
        if(newStok<1000){
            setNewStok(newStok+1)
        }
    }
    const plus12 = () => {
        if(newStok<988){
            setNewStok(newStok+12)
        }else{
            setNewStok(1000)
        }
    }
    const min1 = () => {
        if(newStok>0){
            setNewStok(newStok-1)
        }
    }
    const min12 = () => {
        if(newStok>12){
            setNewStok(newStok-12)
        } else{
            setNewStok(0)
        }
    }

    useEffect(()=>{
        if(newData){
            setNewStok(newData.stok);
        }
    },[newData])
    
    return(
        <>
        <div className={`${show? '' : "hidden"} bg-black/[.6] fixed top-0 right-0 w-full h-screen flex items-center justify-center pl-52`}>
        <div className="relative w-80 bg-white border border-gray-200 rounded-lg shadow">
            <button
            onClick={()=>{setShow(false)}}
            className="absolute bg-red-600 text-white text-2xl w-12 h-12 flex justify-center items-center rounded-full -top-6 -right-6 active:bg-red-800">
                <p>x</p>
            </button>
            <div className="w-full h-60 bg-cover bg-center bg-[url('/src/img/img1.jpeg')]">
                </div>
                <div className="p-5">
                <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-gray-900">{newData.namaBarang}</h5>
                <table className="w-full">
                    <tbody>
                        <tr className="font-semibold text-base text-gray-700">
                            <td className=" w-[35%]">ID Produk</td>
                            <td>:</td>
                            <td className=" text-right">{newData.kodeBarang}</td>
                        </tr>
                        <tr className="font-semibold text-base text-gray-700">
                            <td className=" w-[35%]">Toko</td>
                            <td>:</td>
                            <td className=" text-right">{newData.namaToko}</td>
                        </tr>
                        <tr className="font-semibold text-base text-gray-700">
                            <td className=" w-[35%]">Ukuran</td>
                            <td>:</td>
                            <td className=" text-right">{newData.ukuran}</td>
                        </tr>
                        <tr className="font-semibold text-base text-gray-700">
                            <td className=" w-[35%]">Harga</td>
                            <td>:</td>
                            <td className=" text-right">Rp {newData.harga}</td>
                        </tr>
                        <tr className="font-semibold text-base text-gray-700">
                            <td className=" w-[35%]">Stok</td>
                            <td>:</td>
                            <td className=" text-right"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-between my-5">
                    <button
                    onClick={()=>{min12()}}
                    className="py-1 px-2 bg-red-500 text-white text-xs rounded-md active:bg-red-600">
                        -12
                    </button>
                    <button
                    onClick={()=>{min1()}}
                    className="py-1 px-2 bg-red-500 text-white text-xs rounded-md active:bg-red-600">
                        -1
                    </button>
                    <h1 className=" w-10 text-center text-2xl font-semibold text-gray-700">{newStok}</h1>
                    <button
                    onClick={()=>{plus1()}}
                    className="py-1 px-2 bg-blue-500 text-white text-xs rounded-md active:bg-blue-600">
                        +1
                    </button>
                    <button
                    onClick={()=>{plus12()}}
                    className="py-1 px-2 bg-blue-500 text-white text-xs rounded-md active:bg-blue-600">
                        +12
                    </button>
                </div>
                <input className="w-full" type="range" value={newStok} min={0} max={1000} step={10}
                onChange={(e)=>{setNewStok(Number(e.target.value))}}/>
                </div>
                <div className="flex justify-center">
                <button
                onClick={()=>{handleSubmit()}}
                className="my-5 py-1 px-2 bg-green-600 text-white rounded-md active:bg-green-700">
                    SUBMIT
                </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default EditDataStok