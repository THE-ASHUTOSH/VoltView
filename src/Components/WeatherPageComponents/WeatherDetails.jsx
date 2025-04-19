import React from 'react'

import { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { WeatherPageContext } from '../../Context/WeatherPageContext'
import { Eye, Sun, Umbrella, Cloud } from 'lucide-react'
const WeatherDetails = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { weatherData } = useContext(WeatherPageContext);
    return (
        <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="font-semibold mb-4">Weather Details</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Feels Like</p>
                    <p className="text-lg font-medium">{weatherData.current.feelslike_c}°C</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Humidity</p>
                    <p className="text-lg font-medium">{weatherData.current.humidity}%</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Wind</p>
                    <p className="text-lg font-medium">{weatherData.current.wind_kph} km/h {weatherData.current.wind_dir}</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pressure</p>
                    <p className="text-lg font-medium">{weatherData.current.pressure_mb} hPa</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Visibility</p>
                    </div>
                    <p className="text-lg font-medium">{weatherData.current.vis_km} km</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <div className="flex items-center">
                        <Sun size={16} className="mr-1" />
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>UV Index</p>
                    </div>
                    <p className="text-lg font-medium">{weatherData.current.uv} of 10</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <div className="flex items-center">
                        <Umbrella size={16} className="mr-1" />
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Precipitation</p>
                    </div>
                    <p className="text-lg font-medium">{weatherData.current.precip_mm} mm</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <div className="flex items-center">
                        <Cloud size={16} className="mr-1" />
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Cloud Cover</p>
                    </div>
                    <p className="text-lg font-medium">{weatherData.current.cloud}%</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails