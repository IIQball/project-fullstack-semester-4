import React, { useState } from "react";
import Item from "./Item";
import apis from "../api/stockBarang";
import apist from "../api/transaksiBaru";
import apist1 from "../api/transaksi";


const Cart = ({ items, setItems, dataStock}) => {
  
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.harga * item.stok;
    });
    return totalPrice;
  };
  const tambahtransaksi = async () => {
    
    await apist.insertTransaksi({
      data : items
    })
  }
  const kurang = (item) => {
    const updatedItems = items.map((i) => {
      if (i.kodeBarang === item.kodeBarang) {
        if (i.stok > 0) {
          i.stok--; // Mengurangi stok pada item transaksi
          const dataItem = dataStock.find((data) => data.kodeBarang === item.kodeBarang);
          if (dataItem) {
            dataItem.stok++; // Mengembalikan stok pada data
          }
        }
      }
      return i;
    });
    setItems(updatedItems);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  if (items.length === 0) {
    return <h1 className="font-medium">Keranjang Anda kosong</h1>;
  }

  return (
    <div className="bg-white p-5">
      <div className="text-gray-900 divide-y divide-gray-200 dark:text-black dark:divide-gray-700">
        <div className="flex flex-col">
          <div className="flex">
            <table className="table-auto">
              <tbody>
                {items.map((item, index) => (
                  <tr className="text-lg">
                    <td className="pr-5 pl-10 font-bold">{item.namaBarang}</td>
                    <button
                      className="bg-blue-900 text-white px-2 py-1 rounded-full"
                      onClick={() =>kurang(item)}
                    >
                      -
                    </button>
                    <td className="pr-5 pl-5 font-bold">({item.stok})</td>
                    <button
                      className="bg-blue-900 text-white px-2 py-1 rounded-full"
                      onClick={() =>handleIncreaseStock(item)}
                    >
                      +
                    </button>
                    <td className="pl-5 font-bold">Rp. {item.harga * item.stok}</td>
                    <button
                      className="bg-red-900 text-white px-2 py-1 rounded-full"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ml-28 mt-10 text-2xl">
            <h2 className="font-bold">Total price: Rp {calculateTotalPrice()}</h2>
          </div>
          <div className="ml-36 mt-5 font-semibold">
            {/* <button className="bg-blue-900 text-white px-2 py-1 mr-2" onClick={handleEmptyCart}>
              Hapus
            </button> */}
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={tambahtransaksi}>Bayar sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
