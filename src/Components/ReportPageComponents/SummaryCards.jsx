import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkmodeContext'

const SummaryCards = ({reportData}) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Consumption */}
            <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Consumption</p>
                <p className="text-2xl font-bold">{reportData.summary.totalConsumption} kWh</p>
            </div>

            {/* Average Daily */}
            <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Daily Average</p>
                <p className="text-2xl font-bold">{reportData.summary.averageDaily} kWh</p>
            </div>

            {/* Peak Usage */}
            <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Peak Usage</p>
                <p className="text-2xl font-bold">{reportData.summary.peakUsage} kWh</p>
            </div>

            {/* Cost Estimate */}
            <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Est. Cost</p>
                <p className="text-2xl font-bold">${reportData.summary.costEstimate}</p>
            </div>
        </div>
    )
}

export default SummaryCards