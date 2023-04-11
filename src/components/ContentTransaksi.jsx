import React from "react";
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
    if(isEmpty) return <h1>keranjang anda kosong</h1>
    return (
        <div className="bg-slate-100 col-span-12 row-span-5 p-5">
        <section className="">
            <div className="col flex-content-center">
                <div className="d-flex p-5 ml-10">
                    {/* <center><h5>Belanja ({totalUniqueItems}), Total items:({totalItems})</h5></center> */}
                    <table className="table table-light table-hover ml-10">
                       <tbody> 
                        {/* map berfungsi mebciptakan array dengan memanggil fungsi spesifik pada setiap item  */}
                            {items.map((item, index)=>{     
                                return (
                                    // key berfungsi mengidentifikasi item mana yang telah diubah, ditambahkan atau dihilangkan
                                    <tr key={index}>    
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}}></img>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-primary m-1 " onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <button className="btn btn-primary m-1 " onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <button className="btn btn-danger ms-2 " onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex flex-row-reverse">
                    <h2>Total price: Rp{cartTotal}</h2>
                </div>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>hapus</button>
                    <button className="btn btn-primary m-1">Bayar sekarang</button>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Cart;