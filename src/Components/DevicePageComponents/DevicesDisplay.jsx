import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { 
    Lightbulb, 
    Thermometer, 
    Tv, 
    Coffee, 
    Speaker,
    Fan,
    Power,
    Smartphone,
    Wifi,
    Lock
  } from 'lucide-react';
import { DataContext } from '../../Context/Data';

const DevicesDisplay = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {devices, setdevices} = useContext(DataContext);

    const toggleDevice = (id) => {
        setdevices(devices.map(device => 
          device.id === id ? { ...device, status: !device.status } : device
        ));
      };
    
      // Get device icon based on type
      const getDeviceIcon = (type, active) => {
        const iconColor = active ? 
          (darkMode ? "text-green-400" : "text-green-600") : 
          (darkMode ? "text-gray-500" : "text-gray-400");
        
        const iconProps = { 
          size: 24, 
          className: iconColor 
        };
    
        switch(type) {
          case 'light': return <Lightbulb {...iconProps} />;
          case 'ac': return <Thermometer {...iconProps} />;
          case 'tv': return <Tv {...iconProps} />;
          case 'coffee': return <Coffee {...iconProps} />;
          case 'speaker': return <Speaker {...iconProps} />;
          case 'fan': return <Fan {...iconProps} />;
          case 'wifi': return <Wifi {...iconProps} />;
          case 'lock': return <Lock {...iconProps} />;
          default: return <Smartphone {...iconProps} />;
        }
      };


    return (
        <>
        {devices.map((device,key) => (
        <div
            key={device.id}
            className={`p-4 rounded-lg shadow transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'
                } ${device.status ? 'border-l-4 border-green-500' : ''
                }`}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${device.status ?
                            (darkMode ? 'bg-green-900' : 'bg-green-100') :
                            (darkMode ? 'bg-gray-700' : 'bg-gray-100')
                        }`}>
                        {getDeviceIcon(device.type, device.status)}
                    </div>
                    <div>
                        <h3 className="font-medium">{device.name}</h3>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {device.location}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => toggleDevice(device.id)}
                    className={`p-2 rounded-full ${device.status ?
                            (darkMode ? 'bg-green-800 text-green-200' : 'bg-green-600 text-white') :
                            (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
                        }`}
                    aria-label={`Turn ${device.status ? 'off' : 'on'} ${device.name}`}
                >
                    <Power size={18} />
                </button>
            </div>

            <div className="mt-3 flex justify-between items-center">
                <span className={`text-sm ${device.status ?
                    (darkMode ? 'text-green-400' : 'text-green-600') :
                    (darkMode ? 'text-gray-400' : 'text-gray-500')
                    }`}>
                    {device.status ? 'ON' : 'OFF'}
                </span>

                {device.status && (
                    <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-green-50'
                        }`}>
                        {device.type === 'ac' ? '~1.8 kWh' :
                            device.type === 'tv' ? '~0.9 kWh' :
                                device.type === 'light' ? '~0.12 kWh' :
                                    device.type === 'coffee' ? '~0.8 kWh' : '~0.3 kWh'}
                    </span>
                )}
            </div>
        </div>
        ))}
        </>
    )
}

export default DevicesDisplay