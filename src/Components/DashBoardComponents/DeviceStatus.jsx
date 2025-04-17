import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { DataContext } from '../../Context/Data';
import { Home, 
    Thermometer, 
    Zap, 
    Sun, 
    Moon, 
    Cloud, 
    CloudRain, 
    Wind, 
    ArrowDown, 
    ArrowUp, 
    Clock,
    Lightbulb,
    Coffee,
    Monitor,
    Tv } from "lucide-react";


const DeviceIcon = ({ type }) => {
    switch(type) {
      case 'light': return <Lightbulb size={18} />;
      case 'ac': return <Thermometer size={18} />;
      case 'entertainment': return <Tv size={18} />;
      case 'appliance': return <Coffee size={18} />;
      case 'heater': return <Zap size={18} />;
      default: return <Monitor size={18} />;
    }
  };

const DeviceStatus = () => {
    const {darkMode}  = useContext(DarkModeContext);
    const data = useContext(DataContext);
    return (
        <div className={`col-span-2 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="font-semibold mb-4">Active Devices</h3>
            <div className="space-y-3">
                {data.devices.map(device => (
                    <div
                        key={device.id}
                        className={`p-3 rounded-lg flex justify-between items-center ${device.status === 'on' ?
                                (darkMode ? 'bg-gray-700' : 'bg-green-50') :
                                (darkMode ? 'bg-gray-900 opacity-60' : 'bg-gray-100 opacity-70')
                            }`}
                    >
                        <div className="flex items-center">
                            <div className={`p-2 rounded-full mr-3 ${device.status === 'on' ?
                                    (darkMode ? 'bg-green-900 text-green-400' : 'bg-green-200 text-green-700') :
                                    (darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500')
                                }`}>
                                <DeviceIcon type={device.type} />
                            </div>
                            <div>
                                <p className="font-medium">{device.name}</p>
                                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {device.location}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {device.status === 'on' && (
                                <span className={`text-sm mr-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                                    {device.consumption} kWh
                                </span>
                            )}
                            <div className={`px-2 py-1 rounded text-xs ${device.status === 'on' ?
                                    (darkMode ? 'bg-green-900 text-green-400' : 'bg-green-200 text-green-800') :
                                    (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-600')
                                }`}>
                                {device.status.toUpperCase()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceStatus