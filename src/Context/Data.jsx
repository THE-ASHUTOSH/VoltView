import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()
const DataProvider = ({ children }) => {
    const [devices, setdevices] = useState([
        { id: 1, name: 'Living Room Lights', type: 'light', status: false, location: 'Living Room', consumption: 0.1 },
        { id: 2, name: 'Kitchen AC', type: 'ac', status: false, location: 'Kitchen', consumption: 1.2 },
        { id: 3, name: 'Smart TV', type: 'tv', status: false, location: 'Living Room', consumption: 0.3 },
        { id: 4, name: 'Coffee Maker', type: 'coffee', status: false, location: 'Kitchen', consumption: 0.5 },
        { id: 5, name: 'Smart Speaker', type: 'speaker', status: false, location: 'Bedroom', consumption: 0.2 },
        { id: 6, name: 'Ceiling Fan', type: 'fan', status: false, location: 'Bedroom', consumption: 0.4 },
        { id: 7, name: 'WiFi Router', type: 'wifi', status: true, location: 'Home Office', consumption: 0.1 },
        { id: 8, name: 'Smart Lock', type: 'lock', status: true, location: 'Front Door', consumption: 0.05 }
    ])
    const [data, setdata] = useState({
        totalDevices: 14,
        activeDevices: 8,
        currentUsage: (Math.random() * 3.5 + 1.2).toFixed(2),
        temperature: {
            indoor: (Math.random() * 5 + 20).toFixed(1),
            outdoor: (Math.random() * 10 + 15).toFixed(1)
        },
        humidity: Math.floor(Math.random() * 30 + 40),
        weather: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
        devices: devices,
        usageData: Array.from({ length: 24 }, (_, i) => ({
            hour: i,
            usage: Math.random() * 3 + (i >= 17 && i <= 22 ? 2 : 0.5)
        }))
    })

    useEffect(() => {
        setdata(prevData => ({
            ...prevData,
            devices: devices,
        }))
    }, [devices])
    

    return (
        <DataContext.Provider value={{data,devices,setdevices}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider