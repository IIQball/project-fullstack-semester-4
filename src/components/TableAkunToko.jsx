const TableAkunToko = ()=> {
    return(
        <>
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-9">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-biru dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name Toko
                            </th>
                            <th scope="col" class="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-6 py-4" >
                            <p>1</p>
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <p>Toko A</p>
                        </td>
                        <td class="px-6 py-4">
                            <p>toko_a</p>
                        </td>
                        <td class="px-6 py-4 ">
                            <p>********</p>
                            {/* <input type="password"  className="focus:outline-none fa-solid fa-lock "/> */}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableAkunToko;