import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {AdminContext} from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { useContext } from 'react'
const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext)
const {dToken,setDToken} = useContext(DoctorContext)
    const navigate = useNavigate()

    const Logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('Token')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src= {assets.admin_logo} alt="" />
        <p className='border px-2 py-0 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'doctor'}</p>
      </div>
      <button onClick={Logout} className='bg-blue-600 text-white text-sm px-10 py-2 rounded-full'> Logout</button>
    </div>
  )
}

export default Navbar;
