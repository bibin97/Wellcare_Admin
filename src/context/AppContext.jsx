import { createContext } from "react";
import React from "react";
export const AppContext = createContext()

const AppContextprovider = (props) => {

    const currency = '₹'

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);

        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('-');
        const year = dateArray[0];
    const month = months[Number(dateArray[1]) - 1]; // subtract 1 because array is 0-indexed
    const day = dateArray[2];
    return `${day} ${month} ${year}`;
    
    }

    const value = {

        calculateAge, slotDateFormat,
        currency

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextprovider
