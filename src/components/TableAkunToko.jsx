const TableAkunToko = ()=> {
    return(
        <>
            <div class="overflow-x-auto shadow-md sm:rounded-lg mt-9">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th class="px-6 py-4" >
                                1
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                TOKO A
                            </th>
                            <td class="px-6 py-4">
                                toko_a
                            </td>
                            <td class="px-6 py-4">
                                **********
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th class="px-6 py-4" >
                                2
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                TOKO B
                            </th>
                            <td class="px-6 py-4">
                                toko_b
                            </td>
                            <td class="px-6 py-4">
                                **********
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th class="px-6 py-4" >
                                3
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                TOKO C
                            </th>
                            <td class="px-6 py-4">
                                toko_c
                            </td>
                            <td class="px-6 py-4">
                                **********
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