import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdmimContext';
import Sidebar from './components/Sidebar';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointment from './pages/Admin/AllApointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorsList';


const App = () => {
  const {aToken} = useContext(AdminContext)
  
  return aToken? (
    <div className='bg-white'>
      <Login />
      <ToastContainer />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></> } />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/All-appointment' element={<AllApointment />} />
          <Route path='/add-doctors' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorList />} />

        </Routes>
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
