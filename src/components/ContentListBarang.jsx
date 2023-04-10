import { useState } from "react"

const ContentListBarang = () => {
    
    return(
        <>
            {/* container */}
            <div className="bg-slate-100 col-span-10 row-span-5 p-5">
                <div class="overflow-x-auto shadow-md sm:rounded-lg m-0 ml-72 mr-8 mt-9">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-black">
                        <thead class="text-xs text-white uppercase bg-biru dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Gambar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nama Barang
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Edit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Hapus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                                <th class="px-6 py-4" >
                                    1
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    -
                                </th>
                                <td class="px-6 py-4">
                                    Jubah
                                </td>
                                <td class="px-6 py-4">
                                    Pakaian
                                </td>
                                <td class="px-6 py-4">
                                    Rp. 300.000
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Hapus</a>
                                </td>
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-100 dark:border-gray-700">
                            <th class="px-6 py-4" >
                                    2
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    -
                                </th>
                                <td class="px-6 py-4">
                                    Baju
                                </td>
                                <td class="px-6 py-4">
                                    Pakaian
                                </td>
                                <td class="px-6 py-4">
                                    Rp. 275.000
                                </td>
                                <td class="px-6 py-4">
                                    <a  href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Hapus</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                            <th class="px-6 py-4" >
                                    3
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    -
                                </th>
                                <td class="px-6 py-4">
                                    Celana
                                </td>
                                <td class="px-6 py-4">
                                    Pakaian
                                </td>
                                <td class="px-6 py-4">
                                    Rp. 250.000
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Hapus</a>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ContentListBarang;