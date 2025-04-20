import { useState, useEffect, useContext } from 'react';
import {
    FileText,
    Calendar,
    Download,
    BarChart,
    PieChart,
    Clock,
    Sun,
    Moon,
    Home,
    ChevronDown,
    Filter
} from 'lucide-react';
import { DarkModeContext } from '../Context/DarkmodeContext';
import NavBar from '../Components/NavBar';
import KeyInsightsSection from '../Components/ReportPageComponents/KeyInsightsSection';
import SummaryCards from '../Components/ReportPageComponents/SummaryCards';

// Fake report data for demonstration
const generateReportData = () => {
    return {
        summary: {
            totalConsumption: (Math.random() * 100 + 150).toFixed(1),
            averageDaily: (Math.random() * 5 + 10).toFixed(1),
            peakUsage: (Math.random() * 3 + 4).toFixed(1),
            costEstimate: (Math.random() * 30 + 50).toFixed(2)
        },
        deviceBreakdown: [
            { name: 'Lights', percentage: 15, consumption: 22.5 },
            { name: 'HVAC', percentage: 40, consumption: 60.0 },
            { name: 'Kitchen', percentage: 25, consumption: 37.5 },
            { name: 'Entertainment', percentage: 12, consumption: 18.0 },
            { name: 'Other', percentage: 8, consumption: 12.0 }
        ],
        dailyUsage: Array.from({ length: 30 }, (_, i) => ({
            day: i + 1,
            usage: Math.random() * 6 + 8
        }))
    };
};

export default function ReportPage() {
    const {darkMode} = useContext(DarkModeContext)
    const [reportData, setReportData] = useState(generateReportData());
    const [currentTime, setCurrentTime] = useState(new Date());
    const [reportPeriod, setReportPeriod] = useState('month');
    const [currentMonth, setCurrentMonth] = useState('April');

    // Simulate report data updates
    

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            {/* Navigation Bar */}
            <NavBar/>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-6">
                {/* Report Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center">
                            <FileText className="mr-2" /> Energy Report
                        </h2>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Energy consumption analysis and insights
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className={`flex items-center p-2 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
                            <Calendar size={18} className="mr-2" />
                            <span>{currentMonth} 2025</span>
                            <ChevronDown size={16} className="ml-2" />
                        </div>

                        <div className="flex">
                            <button
                                onClick={() => setReportPeriod('week')}
                                className={`px-3 py-1 text-sm rounded-l ${reportPeriod === 'week' ?
                                    (darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white') :
                                    (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                            >
                                Week
                            </button>
                            <button
                                onClick={() => setReportPeriod('month')}
                                className={`px-3 py-1 text-sm rounded-r ${reportPeriod === 'month' ?
                                    (darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white') :
                                    (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                            >
                                Month
                            </button>
                        </div>

                        <button className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow flex items-center`}>
                            <Download size={18} className="mr-1" />
                            <span className="text-sm">Export</span>
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <SummaryCards reportData={reportData}/>

                {/* Main Report Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Usage Graph - Takes up 3/5 of the space */}
                    <div className={`lg:col-span-3 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold flex items-center">
                                <BarChart size={18} className="mr-2" /> Daily Consumption
                            </h3>
                        </div>

                        {/* Simple graph visualization */}
                        <div className="h-64 w-full">
                            <div className="flex h-full items-end">
                                {reportData.dailyUsage.map((day, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 mx-px flex flex-col items-center"
                                    >
                                        <div
                                            style={{ height: `${(day.usage / 15) * 100}%` }}
                                            className={`w-full ${darkMode ? 'bg-green-700' : 'bg-green-500'} rounded-t`}
                                        ></div>
                                        {i % 5 === 0 && (
                                            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {day.day}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Device Breakdown - Takes up 2/5 of the space */}
                    <div className={`lg:col-span-2 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="font-semibold flex items-center mb-4">
                            <PieChart size={18} className="mr-2" /> Consumption by Device Type
                        </h3>

                        <div className="space-y-3">
                            {reportData.deviceBreakdown.map((device, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex justify-between mb-1">
                                        <span>{device.name}</span>
                                        <span>{device.percentage}% ({device.consumption} kWh)</span>
                                    </div>
                                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div
                                            className={`h-full rounded-full ${index === 0 ? 'bg-blue-500' :
                                                index === 1 ? 'bg-green-500' :
                                                    index === 2 ? 'bg-yellow-500' :
                                                        index === 3 ? 'bg-red-500' : 'bg-purple-500'
                                                }`}
                                            style={{ width: `${device.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Insights Section */}
                <KeyInsightsSection/>
            </div>
        </div>
    );
}