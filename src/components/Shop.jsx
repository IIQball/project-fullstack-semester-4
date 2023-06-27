import React, { useEffect } from "react";
// import Item from "./Item";
import Data from "./Data";
import { CartProvider, useCart, useState } from "react-use-cart";
import ContentTransaksi from './ContentTransaksi';
const Home = () => {
    const { addItem, items} = useCart();
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
    return(
        <div className="bg-slate-200 p-5">
            <div className="flex justify-between">
                <div className="border-2 border-gray-200 w-[750px] grid grid-cols-4 overflow-hidden gap-3"> 
                {dataStock.map((item) => (
                    <div key={item.id}>                         
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={item.img} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
                            </a>
                            <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">Rp.{item.price}</span>
                            </div>
                            <div className="flex items-center justify-end mt-5">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={() => addItem(item)}>Add to cart</button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                
		    </div>
            <div className="border-2 border-gray-200 w-[550px]">
                <CartProvider>
                    <ContentTransaksi/>
                </CartProvider>
            </div>   

            </div>
        </div>
    )
}

export default Home;