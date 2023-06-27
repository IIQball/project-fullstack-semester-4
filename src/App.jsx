import {Route, Routes} from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'
import Transaksi from './pages/Transaksi'

function App() {
  return (
    <Routes>
      <Route path='/' element = {<StockBarang />} />
      <Route path='/transaksi' element = {<Transaksi/>} />
    </Routes>
  )
}

export default App
