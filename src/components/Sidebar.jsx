const Sidebar = ()=> {
    return(
        <>
            <div className="py-10 col-span-2 bg-slate-800 row-span-5 text-slate-500 text-center text-lg font-medium">
                <div className="p-5 hover:bg-slate-400 cursor-pointer">Nama Toko</div>
                <div className="p-5 hover:bg-slate-400 cursor-pointer">Stok Barang</div>
                <div className="p-5 hover:bg-slate-400 cursor-pointer">Transaksi</div>
            </div>
        </>
    );
}
export default Sidebar;