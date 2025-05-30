import React, { useCallback, useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from './context/AppContext';
import Sidebar from './components/Sidebar';
const App = () => {
  const {aToken} = useContext(AppContext)
  
  return aToken? (
    <div>
      <Login />
      <ToastContainer />
      <div>
        <Sidebar />
      </div>
    </div>
  ) : (
    <>
    <Login />
    <ToastContainer />
    </>
  )
}

export default App
