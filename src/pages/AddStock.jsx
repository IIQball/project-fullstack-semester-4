import ItemCard from "../components/AddStock/ItemCard"
import RightBar from "../components/AddStock/RightBar"
import AdminLayout from "../components/layout/AdminLayout"

const AddStock = () => {

    return(
        <>
            <AdminLayout>
                <div className="grid grid-cols-4 gap-y-6 pr-96">
                    <ItemCard />
                </div>
                <RightBar />
            </AdminLayout>
        </>
    )
}

export default AddStock