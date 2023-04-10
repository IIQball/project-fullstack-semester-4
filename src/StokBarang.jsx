import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

const StokBarang = () => {
    return(
        <>
            <div className="relative min-h-screen grid grid-cols-12 grid-rows-6 box-border">
                <Header title="Stok Barang"/>
                <Sidebar/>
                <Content/>
            </div>
        </>
    )
}

export default StokBarang