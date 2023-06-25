import {Route, Routes} from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'
import AddStock from './pages/AddStock'

function App() {
  return (
    <Routes>
      <Route path='/:idUser/stok-barang' element = {<StockBarang />} />
      <Route path='/add-stock' element = {<AddStock />} />
    </Routes>
  )
}

export default App
