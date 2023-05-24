import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import ContentListBarang from "../components/ContentListBarang"

const ListBarang = () => {
    return(
        <>
            <div className="relative min-h-screen grid grid-cols-12 grid-rows-6 box-border">
                <Header title="list Barang"/>
                <Sidebar/>
                <ContentListBarang />
            </div>
        </>
    )
}

export default ListBarang;