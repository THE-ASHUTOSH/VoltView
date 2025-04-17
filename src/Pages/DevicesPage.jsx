import React, { useContext } from 'react'
import { DarkModeContext } from '../Context/DarkmodeContext'
import NavBar from '../Components/NavBar';
import DevicesDisplay from '../Components/DevicePageComponents/DevicesDisplay';
import { DataContext } from '../Context/Data';
import QuickActions from '../Components/DevicePageComponents/QuickActions';
import DeviceStats from '../Components/DevicePageComponents/DeviceStats';



const DevicesPage = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { devices, setDevices } = useContext(DataContext);



    return (
        <>
            <div
                className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
                    }`}
            >
                <NavBar />
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <DevicesDisplay />
                    </div>
                    <QuickActions />
                    <DeviceStats/>
                </div>
            </div>
        </>
    )
}

export default DevicesPage