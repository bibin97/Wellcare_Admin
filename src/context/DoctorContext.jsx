import { createContext, useState } from "react";
import React from "react";
export const DoctorContext = createContext()

const DoctorContextprovider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
   
    const value = {
        dToken, setDToken,
        backendUrl
    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextprovider
