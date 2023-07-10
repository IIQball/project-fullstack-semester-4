import { useEffect, useState } from "react";
import apis from "../../api/stockBarang";
import { useParams } from "react-router-dom";

const ItemCard = ({ _namaToko, setNewStok }) => {
  const {idUser} = useParams();
  const [dataStock, setDataStock] = useState([]);

  const handleClick = (idx) => {
    setNewStok(stok => [...stok, dataStock[idx]])
  };

  useEffect(() => {
    const fetchData = async() => {
        try{
            let response = await apis.getStockByToko(idUser,_namaToko);
            setDataStock(response.data);

        }catch(err){
            console.log(err.message);
        }
    };
    fetchData();
}, [_namaToko]);
  return(
    <>
      {dataStock.map((item,idx) => (
        <button key={idx} onClick={()=>{handleClick(idx)}}>
          <div className="max-w-[13rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
            <div className="w-full h-40 bg-cover bg-center bg-[url('/src/img/img1.jpeg')]">
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{ item.namaBarang }</h5>
              <p className="mb-3 font-semibold text-base text-gray-700">Rp { item.harga }</p>

              {/* stock dan size */}
              <div className="flex justify-between">
                <div className="flex bg-gray-800 max-w-fit py-1 px-2 text-sm text-white rounded-sm">
                  <p className="mr-2">Stock : </p>
                  <p>{ item.stok }</p>
                </div>
                <div className="flex bg-gray-500 max-w-fit py-1 px-2 text-sm text-white rounded-sm">
                  <p className="mr-2">Size : </p>
                  <p>{ item.ukuran }</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </>
    
  )
}
export default ItemCard