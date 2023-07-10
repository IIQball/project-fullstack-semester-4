import {Link, useParams} from 'react-router-dom'

const AdminLayout = ({children}) => {
    const { idUser } = useParams();
    return(
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                </svg>
            </button>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 object-right" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <div>
                        <div className='flex items-center text-white font-medium text-xl mb-3'>
                            <img src='/src/img/logo-toko.jpg'
                                className='w-16 h-w-16 rounded-md'
                            />
                            <h1 className='ml-3'>DISTRO OUTFIT</h1>
                        </div>
                        <div className='flex h-1 border-b-2 border-b-gray-500 mb-5'></div> 
                    </div>
                    
                    <ul className="space-y-2 font-medium">
                        <li>
                        <Link to="/akun-toko" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                            <img src='https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/EBEBEB/external-user-interface-kiranshastry-solid-kiranshastry-1.png'
                                className='w-6 h-6'
                                />
                            <span className="ml-3">Akun Toko</span>
                        </Link>
                        </li>
                        <li>
                        <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                            <img src='https://img.icons8.com/pastel-glyph/64/EBEBEB/clothes--v1.png'
                                className='w-6 h-6'
                            />
                            <span className="flex-1 ml-3 whitespace-nowrap">Data Produk</span>
                        </a>
                        </li>
                        <li>
                        <Link to={`/${idUser}/new-stok-barang`} className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                            <img src='https://img.icons8.com/external-phatplus-solid-phatplus/64/EBEBEB/external-stock-shipping-phatplus-solid-phatplus.png'
                                className='w-6 h-6'
                            />
                            <span className="flex-1 ml-3 whitespace-nowrap">Stock</span>
                        </Link>
                        </li>
                        <li>
                        <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                            <img src='https://img.icons8.com/external-itim2101-fill-itim2101/64/EBEBEB/external-payment-currency-itim2101-fill-itim2101-4.png'
                                className='w-6 h-6'
                            />
                            <span className="flex-1 ml-3 whitespace-nowrap">Data Transaksi</span>
                        </a>
                        </li>
                    </ul>
                    <div className='fixed bottom-0'>
                        <div className='flex h-1 border-b-2 border-b-gray-500 mb-5'></div> 
                        <div className='flex items-center text-white font-medium mb-3'>
                        <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                            <div className='bg-white flex items-center justify-center p-1 rounded-full'>
                                <img src='https://img.icons8.com/material-sharp/48/user.png'
                                    className='w-6 h-w-6'
                                />
                            </div>
                            <span className='ml-3'>Username Admin</span>
                        </a>
                        </div>
                    </div>
                </div>
            </aside>
            <div className=" sm:ml-64">
                {children}
            </div>
        </>
    )
}
export default AdminLayout;