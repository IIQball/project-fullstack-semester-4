import {Route, Routes} from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'
import EditStok from './pages/EditStok'
import NewStokBarang from './pages/NewStokBarang'

function App() {
  return (
    <Routes>
      <Route path='/:idUser/stok-barang' element = {<StockBarang />} />
      <Route path='/:idUser/new-stok-barang' element = {<NewStokBarang />} />
      <Route path='/:idUser/edit-stok' element = {<EditStok />} />
    </Routes>
  )
}

export default App
