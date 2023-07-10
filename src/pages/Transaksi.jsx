import AdminLayout from "../components/layout/AdminLayout";
import Shop from "../components/Shop"
import ContentTransaksi from "../components/ContentTransaksi"
import Item from "../components/Item";
import { CartProvider } from "react-use-cart";
// import Header from "../components/Header";

const Transaksi = () => {
    return(
        <>  <header></header>
            <AdminLayout>
                <Shop />
            </AdminLayout>
        </>
    )
}

export default Transaksi