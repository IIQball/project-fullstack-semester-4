import AdminLayout from "../components/layout/AdminLayout";
import Shop from "../components/Shop"
import ContentTransaksi from "../components/ContentTransaksi"
import { CartProvider } from "react-use-cart";
import Item from "../components/Item";
import Header from "../components/Header";

const Transaksi = () => {
    return(
        <>
            <CartProvider>
                <Header/>
                <Shop />
            </CartProvider>
        </>
    )
}

export default Transaksi