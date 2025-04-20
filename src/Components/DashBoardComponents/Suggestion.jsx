import React, { useContext } from 'react'
import { DataContext } from '../../Context/Data'
import { DarkModeContext } from '../../Context/DarkmodeContext'


const getRecommendation = (data) => {
    const recommendations = [
      "Consider turning off your AC and opening windows as outdoor temperature is favorable.",
      "Your living room devices consume the most energy. Try using them during off-peak hours.",
      "Kitchen appliances are currently using high energy. Consider using them one at a time.",
      "It's sunny outside! You can turn off some indoor lighting to save energy.",
      "Your energy usage peaks around 7 PM. Try spacing out device usage to reduce peak consumption."
    ];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
  };

  

const Suggestion = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {data} = useContext(DataContext)

    const totalEnergyConsumption = data.devices
    .filter(device => device.status === true)
    .reduce((total, device) => total + device.consumption, 0).toFixed(2);

    return (
        <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="font-semibold mb-4">Energy-Saving Recommendations</h3>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900' : 'bg-green-50'} mb-4`}>
                <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
                    {getRecommendation(data)}
                </p>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className={`font-medium text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Current Savings
                </h4>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        {(15.7 - Number(totalEnergyConsumption)).toFixed(2)} kWh
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        ~$
                        {((15.7 - Number(totalEnergyConsumption)) * 0.12).toFixed(2)}/day
                    </span>
                </div>
                {/* Simple progress bar */}
                <div className={`mt-2 h-2 w-full rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                    <div
                        className={`h-full rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}
                        style={{ width: `${((15.7 - Number(totalEnergyConsumption)) / 15.7 * 100).toFixed(0)}%` }}
                    ></div>
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {((15.7 - Number(totalEnergyConsumption)) / 15.7 * 100).toFixed(0)}% saved compared to yesterday
                </p>
            </div>
        </div>
    )
}

export default Suggestion