import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import AkunToko from './pages/AkunToko';
import UserLogin from './pages/UserLogin';
import LoginAplikasiKasir from './pages/LoginAplikasiKasir';
import BuatAkunBaru from './pages/BuatAkunBaru';
import BuatAkunToko from './pages/BuatAkunToko';
import TambahStok from './pages/TambahStok';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/akun-toko' element={ <AkunToko/> }/>
        <Route path='/user-login' element={ <UserLogin/> }/>
        <Route path='/login-aplikasi-kasir' element={ <LoginAplikasiKasir/> }/>
        <Route path='/buat-akun-baru' element={ <BuatAkunBaru/> }/>
        <Route path='/buat-akun-toko' element={ <BuatAkunToko/> }/>
        <Route path='/tambah-stok' element={ <TambahStok/> }/>
      </Routes>
    </>
  )
}

export default App
