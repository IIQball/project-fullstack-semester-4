import React, { useState, useEffect } from "react";
import Cart from "./ContentTransaksi";
import { useParams } from "react-router-dom";
import apis from "../api/stockBarang"
import apist1 from "../api/transaksi";


const Home = () => {
  const [items, setItems] = useState([]);

  const handleClick = async (data) => {
    
    console.log(data.kodeBarang)
    // const response = await apist1.kurangiStok(data.kodeBarang);
    data.stok--

    let index = -1
    const check = items.find((v,i) => {
      if(v.kodeBarang === data.kodeBarang){
        index = i
        return v
      }
    })

    if(!check){
    const dino = {
      "idToko" : data.idToko,
      "namaToko" : data.namaToko,
      "kodeBarang" : data.kodeBarang,
      "namaBarang" : data.namaBarang,
      "harga" : data.harga,
      "ukuran" : data.ukuran,
      "stok" : 1
    }
      setItems([...items, dino]);
    }else{

      const hasil = items.map((v) => {
        if(v.kodeBarang === check.kodeBarang){
          v.stok = v.stok + 1
          return v
        }
        return v
      })
      setItems(hasil)
    }

  };
  
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

  return (
    <div className="bg-slate-200 p-5">
      <div className="flex justify-between">
        <div className="border-2 border-gray-200 w-[750px] grid grid-cols-4 overflow-hidden gap-3">
          {dataStock.map((data) => (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img className="p-8 rounded-t-lg" src={`/src/img/img1.jpeg`}  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{data.namaBarang}</h5>
                  </a>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{data.ukuran}</h5>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Rp.{data.harga}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Stok:{data.stok}</span>
                  </div>
                  <div className="flex items-center justify-end mt-5">
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                      onClick={() => handleClick(data)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="border-2 border-gray-200 w-[550px]">
          <Cart items={items} setItems={setItems} dataStock={dataStock} setDataStock={setDataStock} idUser={idUser}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
