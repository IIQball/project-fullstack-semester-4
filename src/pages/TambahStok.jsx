const TambahStok = () => {
    return(
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal p-8 bg-biru">
                <div className="flex items-center flex-no-shrink text-white mr-6 ">
                    <img src='/src/img/logo-toko.jpg'
                                    className='w-16 h-w-16 rounded-md'
                                />
                    <span className="font-semibold text-xl tracking-tight ml-5">DISTRO OUTFIT</span>
                </div>
                
                <div className="text-white flex items-center justify-between ">
                    <p className="p-4 text-xl">Akun_Toko</p>
                    <div className='bg-white flex items-center justify-center p-1 rounded-full'>
                        <img src='https://img.icons8.com/material-sharp/48/user.png'
                        className='w-6 h-w-6'/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default TambahStok;