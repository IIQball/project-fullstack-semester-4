import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

// pages
import User from './User'
import StokBarang from './StokBarang'
import TestState from './TestState'
import AkunToko from './AkunToko'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AkunToko/>
  </React.StrictMode>,
)