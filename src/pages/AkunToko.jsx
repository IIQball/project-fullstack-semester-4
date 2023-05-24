import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ContentAkunToko from "../components/ContentAkunToko"

const StokBarang = () => {
    return(
        <>
            <div className="relative min-h-screen grid grid-cols-12 grid-rows-6">
                <Header title="Nama Toko"/>
                <Sidebar/>
                <ContentAkunToko/>
            </div>
        </>
    )
}

export default StokBarang