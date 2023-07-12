import React, { useState } from "react";
import apist from "../api/transaksiBaru";


const Cart = ({ items, setItems, dataStock, idUser }) => {

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.harga * item.stok;
    });
    return totalPrice;
  };
  const tambahtransaksi = async () => {

    await apist.insertTransaksi(idUser, {
      data: items
    })
    alert('Transaksi Sukses');
    location.reload();
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

    <div className="">
      <table className="mr-80 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody className="text-lg">
          {items.map((item) =>(
            <tr key={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.namaBarang}
            </th>
            <td className="px-6 py-4">
            <button type="button" 
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() =>kurang(item)}
            >-</button>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.stok}
            </th>
            <td className="px-6 py-4">
            <button type="button" 
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() =>handleIncreaseStock(item)}
            >+</button>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Rp.{item.harga * item.stok}
            </th>
            <td className="px-6 py-4">
            <button type="button" 
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => removeItem(item.id)}
            >Remove</button>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <div className="ml-28 mt-10 text-2xl ">
            <h2 className="font-bold text-right">Total price: Rp {calculateTotalPrice()}</h2>
          </div>
          <div className="ml-36 mt-5 font-semibold text-right">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 m-auto" onClick={tambahtransaksi}>Bayar sekarang</button>
          </div>
    </div>
    

  );
};

export default Cart;