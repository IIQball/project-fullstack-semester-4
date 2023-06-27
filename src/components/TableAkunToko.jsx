const TableAkunToko = ({dataAkunToko})=> {
    return(
        <>
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-9">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-biru dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name Toko
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3 col-span-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAkunToko.map((data,idx)=>(
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4" >
                                {idx+1}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.namatoko}
                            </td>
                            <td className="px-6 py-4">
                                {data.username}
                            </td>
                            <td className="px-6 py-4 ">
                                <input type="password"  className="focus:outline-none fa-solid fa-lock " value={data.password}/>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Hapus</a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default TableAkunToko;