import { useEffect, useState } from "react"
import ItemCard from "../components/AddStock/ItemCard"
import RightBar from "../components/AddStock/RightBar"
import AdminLayout from "../components/layout/AdminLayout"
import { useParams } from "react-router-dom"
import apis from "../api/stockBarang"

const EditStok = () => {
    const { idUser } = useParams();
    const [listToko, setListToko] = useState([]);
    const [_namaToko, _setNamaToko] = useState("");
    const [newStok, setNewStok] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                let resListToko = await apis.getListToko(idUser);
                setListToko(resListToko.data);
                _setNamaToko(resListToko.data[0]["namaToko"]);

            }catch(err){
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return(
        <>
            <AdminLayout>
                <div className="grid grid-cols-4 gap-y-6 pr-96">
                    <ItemCard _namaToko = {_namaToko} setNewStok ={setNewStok} />
                </div>
                <RightBar listToko={listToko} setNamaToko={_setNamaToko} newStok={newStok} />
            </AdminLayout>
        </>
    )
}

export default EditStok