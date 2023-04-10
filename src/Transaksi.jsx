import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Shop from "./components/Shop"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContentTransaksi from "./components/ContentTransaksi"
import { CartProvider } from "react-use-cart";


const StokBarang = () => {
    return(
        <>
            <div className="relative min-h-screen grid grid-cols-12 grid-rows-6 box-border">
                <CartProvider>
                    <Header title="Transaksi"/>
                    <Sidebar/>
                    <Shop/>
                    <ContentTransaksi/>
                </CartProvider>
            </div>
        </>
    )
}

export default StokBarang