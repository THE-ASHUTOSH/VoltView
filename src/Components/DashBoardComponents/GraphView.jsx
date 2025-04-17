import React, { useContext, useState } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { DataContext } from '../../Context/Data'

const GraphView = () => {
    const {darkMode} = useContext(DarkModeContext)
    const data = useContext(DataContext)
    const [timeFilter, setTimeFilter] = useState('day');
    return (
        <div className={`p-4 rounded-lg shadow mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Energy Consumption</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setTimeFilter('day')}
                        className={`px-3 py-1 text-sm rounded ${timeFilter === 'day' ?
                            (darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white') :
                            (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                    >
                        Day
                    </button>
                    <button
                        onClick={() => setTimeFilter('week')}
                        className={`px-3 py-1 text-sm rounded ${timeFilter === 'week' ?
                            (darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white') :
                            (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setTimeFilter('month')}
                        className={`px-3 py-1 text-sm rounded ${timeFilter === 'month' ?
                            (darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white') :
                            (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Simple graph visualization */}
            <div className="h-64 w-full">
                <div className="flex h-full items-end">
                    {data.usageData.map((hour, i) => (
                        <div
                            key={i}
                            className="flex-1 mx-px flex flex-col items-center"
                        >
                            <div
                                style={{ height: `${(hour.usage / 5) * 100}%` }}
                                className={`w-full ${darkMode ? 'bg-green-700' : 'bg-green-500'} rounded-t`}
                            ></div>
                            {i % 3 === 0 && (
                                <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {hour.hour}:00
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GraphView