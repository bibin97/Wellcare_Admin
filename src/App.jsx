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
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import { DoctorContext } from './context/DoctorContext';


const App = () => {
  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)
  return aToken || dToken? (
    <div className='bg-white'>
      <Login />
      <ToastContainer />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/*admin routes*/}
          <Route path='/' element={<></> } />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/All-appointment' element={<AllApointment />} />
          <Route path='/add-doctors' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorList />} />
          <Route path='/doctor-list' element={<DoctorList />} />
          <Route path='/doctor-list' element={<DoctorList />} />
          {/*doctor routes*/}
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointment' element={<DoctorAppointment />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
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
