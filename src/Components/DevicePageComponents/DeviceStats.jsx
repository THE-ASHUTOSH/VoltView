import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { DataContext } from '../../Context/Data'

const DeviceStats = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {devices} = useContext(DataContext)

    return (
        <div className={`mt-6 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="font-semibold mb-3">Device Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Devices</p>
                    <p className="text-xl font-bold">{devices.length}</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active Devices</p>
                    <p className="text-xl font-bold">{devices.filter(d => d.status).length}</p>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Savings Mode</p>
                    <p className="text-xl font-bold">Off</p>
                </div>
            </div>
        </div>
    )
}

export default DeviceStats