
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AdminContextprovider from './context/AdmimContext.jsx'
import AppContextprovider from './context/AppContext.jsx'
import DoctorContextprovider from './context/DoctorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextprovider>
      <DoctorContextprovider>
        <AppContextprovider>
          <App />
        </AppContextprovider>
      </DoctorContextprovider>
    </AdminContextprovider>
    </BrowserRouter>
  
)
