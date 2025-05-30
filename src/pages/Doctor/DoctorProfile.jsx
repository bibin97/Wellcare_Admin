import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData,backendUrl } = useContext(DoctorContext)
    const { currency,  } = useContext(AppContext)

    const [isEdit, setisEdit] = useState(false)

    const updateprofile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available,
            }
            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile',updateData, {headers:{ dToken }})
            if(data.success){
                toast.success(data.message)
                setisEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

        }catch{
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }

    }, [dToken])

    return profileData && (
        <div className=''>

            <div className='flex flex-col gap-4 m-5'>
                <div>
                    <img className='bg-blue-600/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
                </div>

                <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

                    {/*----doc info:name,education,experience----*/}

                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{profileData.education} - {profileData.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
                    </div>

                    {/*-----Doc about----*/}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About</p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1 '>{profileData.about}</p>
                    </div>

                    <p className='text-gray-600 font-medium mt-4'> Appointment fee: <span className='text-gray-800'>{currency}{isEdit ? <input type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span></p>
                    <div>
                        <p className='flex gap-2 py-2'>Address:</p>
                        <p className='text-sm'>{isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1 } }))} value={profileData.address.line1} /> : profileData.address.line1} <br /> {profileData.address.line1}</p>
                        <br />
                        <p className='text-sm'>{isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1 } }))} value={profileData.address.line2} /> : profileData.address.line2} <br /> {profileData.address.line2}</p>
                    </div>

                    <div className='flex gap-1 pt-2'>
                        <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" name='' id='' />
                        <label htmlFor="">Available</label>
                    </div>
                    {
                        isEdit
                            ? <button onClick={() => setisEdit(false)} className='px-4 py-1 border border-blue-600 text-sm rounded-full mt-5 hover:bg-blue-500 hover:text-white transition-all'>save</button>
                            : <button onClick={() => setisEdit(true)} className='px-4 py-1 border border-blue-600 text-sm rounded-full mt-5 hover:bg-blue-500 hover:text-white transition-all'>Edit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
