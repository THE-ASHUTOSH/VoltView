import React, { createContext, useState } from 'react'

export const DataContext = createContext()
const DataProvider = ({ children }) => {
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
        devices: [
            { id: 1, name: 'Living Room Lights', type: 'light', status: 'on', consumption: 0.12, location: 'Living Room' },
            { id: 2, name: 'Kitchen AC', type: 'ac', status: 'on', consumption: 1.8, location: 'Kitchen' },
            { id: 3, name: 'TV', type: 'entertainment', status: 'off', consumption: 0, location: 'Living Room' },
            { id: 4, name: 'Coffee Machine', type: 'appliance', status: 'on', consumption: 0.8, location: 'Kitchen' },
            { id: 5, name: 'Bedroom Heater', type: 'heater', status: 'off', consumption: 0, location: 'Bedroom' },
        ],
        usageData: Array.from({ length: 24 }, (_, i) => ({
            hour: i,
            usage: Math.random() * 3 + (i >= 17 && i <= 22 ? 2 : 0.5)
        }))
    })

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider