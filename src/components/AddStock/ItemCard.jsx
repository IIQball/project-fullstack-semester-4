const ItemCard = () => {
  const list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return(
    <>
      {list.map(() => (
        <div className="max-w-[13rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
          <div className="w-full h-40 bg-cover bg-center bg-[url('/src/img/img1.jpeg')]">
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Kaos Polos</h5>
            <p className="mb-3 font-semibold text-base text-gray-700">Rp 50.000</p>

            {/* stock dan size */}
            <div className="flex justify-between">
              <div className="flex bg-gray-800 max-w-fit py-1 px-2 text-sm text-white rounded-sm">
                <p className="mr-2">Stock : </p>
                <p>220</p>
              </div>
              <div className="flex bg-gray-500 max-w-fit py-1 px-2 text-sm text-white rounded-sm">
                <p className="mr-2">Size : </p>
                <p>M</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
    
  )
}
export default ItemCard