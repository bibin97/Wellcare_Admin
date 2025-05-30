import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdmimContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
const AllApointment = () => {

  const {aToken, appointments, getAllAppointments, CancelAppointment} = useContext(AdminContext)
  const {calculateAge, slotDateFormat,currency} = useContext(AppContext)


  useEffect(() => {
if(aToken) {
      getAllAppointments()
    }

  },[])
  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white rounded text-sm max-h[80vh] min-h-[60vh] overflow-y-scroll'>

        <div className='hidden sm:grid grid-col-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
{appointments.map((item, index) => (
  <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-col-[o05fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
<p className='max-sm:hidden'>{index+1}</p>
<div className='flex items-center gap-2'>
  <img className='w-8 rounded-full' src={item.userdata.image} alt="" />  <p>{item.userdata.name}</p>
</div>
<p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
<p>{slotDateFormat(item.slotDate)},{item.slotTime}</p>
<div className='flex items-center gap-2'>
  <img className='w-8 rounded-full bg-gray-200' src={item.docdata.image} alt="" />  <p>{item.docdata.name}</p>
</div>
<p>{currency},{item.amount}</p>
{item.Cancelled
? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
: <img onClick={()=> CancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
}
    </div>
))}
      </div>
    </div>
  )
}

export default AllApointment
