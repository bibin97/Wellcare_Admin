import { createContext, useState } from "react";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext()

const AdminContextprovider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [doctors, setDoctors] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/";

    const getAllDoctors = async () => {

        try {
            
             const { data } = await axios.post(backendUrl + '/api/admin/all-Doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors);

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {

        try {
            // const backendUrl = "http://localhost:4000/";
             const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors() // Refresh the list of doctors
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {

        try {
            
            const { data } = await axios.post(backendUrl + '/api/admin/appointments', {}, { headers: { aToken } })
            if (data.success) {
                setAppointments(data.appointments)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const CancelAppointment = async (appointmentId) => {
        try {
            
             const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllAppointments() // Refresh the list of appointments
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {
            
             const { data } = await axios.post(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.DashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)


        }
    }

        const value = {
            aToken, setAToken,
            backendUrl, doctors,
            getAllDoctors, changeAvailability,
            appointments, setAppointments,
            getAllAppointments, CancelAppointment,
            dashData, getDashData


        }
        return (
            <AdminContext.Provider value={value}>
                {props.children}
            </AdminContext.Provider>
        )
    }

    export default AdminContextprovider;
