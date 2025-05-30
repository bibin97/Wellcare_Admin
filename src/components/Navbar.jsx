import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {AdminContext} from '../context/AdmimContext'
const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext)

    const navigate = useNavigate()

    const Logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('Token')
    }
  return (
    <div>
      <div>
        <img src= {assets.admin_logo} alt="" />
        <p>{aToken ? 'Admin' : 'doctor'}</p>
      </div>
      <button onClick={Logout}> Logout</button>
    </div>
  )
}

export default Navbar
