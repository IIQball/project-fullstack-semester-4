import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

// pages
import User from './User'
import StokBarang from './StokBarang'
import TestState from './TestState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StokBarang/>
  </React.StrictMode>,
)