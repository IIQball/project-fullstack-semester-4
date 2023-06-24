import {Route, Routes} from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'

function App() {
  return (
    <Routes>
      <Route path='/:idUser/stok-barang' element = {<StockBarang />} />
    </Routes>
  )
}

export default App
