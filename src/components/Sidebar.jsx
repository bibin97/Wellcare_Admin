import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdmimContext'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {
    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        dToken && <ul className='text-gray-600 mt-5'>

            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` }  to ={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` } to={'/All-appointment'}>
                <img src={assets.appointment_icon} alt="" />
                <p>Appointment</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` } to={'/add-doctors'}>
                <img src={assets.add_icon} alt="" />
                <p>Add Doctor</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` } to={'/doctor-list'}>
                <img src={assets.people_icon} alt="" />
                <p>Doctors List</p>
            </NavLink>
        </ul>
      }
      {
        aToken && <ul className='text-gray-600 mt-5'>

            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` }  to ={'/doctor-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` } to={'/doctor-appointment'}>
                <img src={assets.appointment_icon} alt="" />
                <p>Appointment</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${ isActive ? 'bg-white border-r-4 border-blue-500' : ''}` } to={'/doctor-profile'}>
                <img src={assets.people_icon} alt="" />
                <p>Profile</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
