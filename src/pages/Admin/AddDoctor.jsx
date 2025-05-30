import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdmimContext'
import { toast } from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {

    const [docimg, setdocimg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 year')
    const [fee, setFee] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [education, setEducation] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [about, setAbout] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmithandler = (event) => {
        event.preventDefault()

        try {
            if (!docimg) {
                return toast.error('image not selected')
            }


            const formData = new FormData()
            formData.append('image', docimg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fee', Number(fee))
            formData.append('speciality', speciality)
            formData.append('education', education)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
            formData.append('about', about)

            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);

            });

            const { data } = axios.post(backendUrl + 'api/admin/add-doctor', formData, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                setdocimg(false)
                setName('')
                setEmail('')
                setPassword('')
                setExperience('1 year')
                setFee('')
                setSpeciality('General physician')
                setEducation('')
                setAddress1('')
                setAddress2('')
                setAbout('')
            } else {
                toast.error(data.message)
            }



        } catch (err) {
toast.error('error.message')
        }
    }


        return (

            <form className='m-5 w-full'>

                <p className='mb-3 text-lg font-medium'>Add Doctors</p>

                <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                    <div className='flex items-center gap-4 mb-8 text-gray-600'>
                        <label htmlFor=''>
                            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docimg ? URL.createObjectURLassets(docimg) : assets.upload_area} alt="" />
                        </label>
                        <input onChange={(e) => setdocimg(e.target.files[0])} type='file' id='doc-img' hidden />
                        <p>Upload doctor <br /> picture</p>
                    </div>

                    <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                        <div className='w-full lg:flex-1 flex flex-col gap-4'>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Doctor Name</p>
                                <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                            </div>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Doctor Email</p>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                            </div>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Doctor password</p>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                            </div>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Experience</p>
                                <selesct onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name='' id=''>
                                    <option value='1 year'>1 year</option>
                                    <option value='2 year'>2 year</option>
                                    <option value='3 year'>3 year</option>
                                    <option value='4 year'>4 year</option>
                                    <option value='5 year'>5 year</option>
                                    <option value='6 year'>6 year</option>
                                    <option value='7 year'>7 year</option>
                                    <option value='8 year'>8 year</option>
                                    <option value='9 year'>9 year</option>
                                    <option value='10 year'>10 year</option>
                                </selesct>
                            </div>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Fee</p>
                                <input onChange={(e) => setFee(e.target.value)} value={fee} className='border rounded px-3 py-2' type="number" placeholder='fee' required />
                            </div>
                        </div>

                        <div className='w-full lg:flex-1 flex flex-col gap-4'>
                            <div className='flex-1 flex flex-col gap-1'>
                                <p>Speciality</p>
                                <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name='' id=''>
                                    <option value='General physician'>General physician</option>
                                    <option value='Gynecology '>Gynecology  </option>
                                    <option value='Dermatology'>Dermatology  </option>
                                    <option value='Pediatrician'>Pediatrician</option>
                                    <option value='Neurology'>Neurology</option>
                                    <option value='Gastroentroligst'>Gastroentroligst</option>
                                </select>
                            </div>
                            <div>
                                <p className='flex-1 flex flex-col gap-1'>Education</p>
                                <input onChange={(e) => setEducation(e.target.value)} value={education} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
                            </div>
                            <div>
                                <p className='flex-1 flex flex-col gap-1'>Address</p>
                                <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
                                <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className='mt-4 mb-2'>About Doctor</p>
                        <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder='write about doctor' row={5} required />
                    </div>

                    <button className='bg-blue-600 px-10 py-3 text-white border rounded'>Add Doctor</button>

                </div>
            </form>
        )
    }


    export default AddDoctor;
