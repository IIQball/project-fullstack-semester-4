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
    if(isEmpty) return <h1>keranjang anda kososng</h1>
    return (
        <section className="d-lg-inline-flex">
            <div className="col flex-content-center">
                <div className="justify-content-center">
                    <h5>Belanja ({totalUniqueItems}), Total items:({totalItems})</h5>
                    <table className="table table-light table-hover m-10">
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
                                            <button className="btn btn-primary m-1" onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <button className="btn btn-primary m-1" onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total price: Rp{cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-4" onClick={() => emptyCart()}>hapus</button>
                    <button className="btn btn-primary m-1">Bayar sekarang</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;