import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'

const KeyInsightsSection = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={`mt-6 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="font-semibold mb-3">Key Insights</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h4 className="font-medium text-sm mb-1">Peak Usage Times</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Highest energy consumption occurs between 6PM-9PM, suggesting an opportunity to reduce costs by shifting some activities to off-peak hours.
                    </p>
                </div>

                <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h4 className="font-medium text-sm mb-1">Usage Comparison</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Your energy usage is 12% lower than last month and 8% lower than the average household in your area.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KeyInsightsSection