import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

// pages
import AkunToko from './AkunToko'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AkunToko/>
  </React.StrictMode>,
)