import React, { useEffect } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h1 className="font-medium">keranjang anda kosong</h1>
    return (
        <div className="bg-white p-5">
            <div className=" text-gray-900 divide-y divide-gray-200 dark:text-black dark:divide-gray-700">
                <div className="flex flex-col">
                    <div className="flex">
                        <table className="table-auto">
                        {/* <h1 className="font-extrabold mb-3">Cek Pesanan</h1> */}
                            <tbody> 
                                {items.map((item, index)=>{     
                                    return (
                                        <tr key={index} className="text-lg">    
                                            <td className="pr-5 pl-10 font-bold">{item.title}</td>
                                            <button className="bg-blue-900 text-white px-2 py-1 rounded-full" onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <td className="pr-5 pl-5 font-bold" >({item.quantity})</td>
                                            <button className="bg-blue-900 text-white px-2 py-1 rounded-full " onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <td className="pl-5 font-bold">Rp. {item.price}</td>
                                        </tr>
                                    )
                                    })}
                            </tbody>
                        </table>
                    </div>
                    <div className="ml-28 mt-10 text-2xl"> {/* Mengatur posisi sebelah kanan */}
                        <h2 className="font-bold">Total price: Rp{cartTotal}</h2>
                    </div>
                    <div className="ml-36 mt-5 font-semibold"> {/* Mengatur posisi sebelah kanan */}
                        <button className="bg-blue-900 text-white px-2 py-1 mr-2" onClick={() => emptyCart()}>hapus</button>
                        <button className="bg-blue-900 text-white px-2 py-1">Bayar sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;