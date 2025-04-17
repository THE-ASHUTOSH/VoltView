import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'
import { DataContext } from '../../Context/Data'

const QuickActions = () => {
    const{ darkMode } = useContext(DarkModeContext)
    return (
        <div className={`mt-6 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="font-semibold mb-3">Quick Actions</h2>
            <div className="flex flex-wrap gap-2">
                <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>
                    Turn All Off
                </button>
                <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                    }`}>
                    Eco Mode
                </button>
                <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                    }`}>
                    Night Mode
                </button>
                <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'
                    }`}>
                    Away Mode
                </button>
            </div>
        </div>
    )
}

export default QuickActions