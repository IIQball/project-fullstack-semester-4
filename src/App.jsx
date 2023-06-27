import {Route, Routes} from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'
import Transaksi from './pages/Transaksi'
import AddStock from './pages/AddStock'

function App() {
  return (
    <Routes>
      <Route path='/transaksi' element = {<Transaksi/>} />
      <Route path='/:idUser/stok-barang' element = {<StockBarang />} />
      <Route path='/add-stock' element = {<AddStock />} />
    </Routes>
  )
}

export default App
