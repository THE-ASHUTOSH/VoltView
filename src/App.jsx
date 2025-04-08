import { useState, useEffect } from 'react';
import { 
  Home, 
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
  Tv
} from 'lucide-react';

// Fake data for demonstration
const generateFakeData = () => {
  return {
    totalDevices: 14,
    activeDevices: 8,
    currentUsage: (Math.random() * 3.5 + 1.2).toFixed(2),
    temperature: {
      indoor: (Math.random() * 5 + 20).toFixed(1),
      outdoor: (Math.random() * 10 + 15).toFixed(1)
    },
    humidity: Math.floor(Math.random() * 30 + 40),
    weather: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
    devices: [
      { id: 1, name: 'Living Room Lights', type: 'light', status: 'on', consumption: 0.12, location: 'Living Room' },
      { id: 2, name: 'Kitchen AC', type: 'ac', status: 'on', consumption: 1.8, location: 'Kitchen' },
      { id: 3, name: 'TV', type: 'entertainment', status: 'off', consumption: 0, location: 'Living Room' },
      { id: 4, name: 'Coffee Machine', type: 'appliance', status: 'on', consumption: 0.8, location: 'Kitchen' },
      { id: 5, name: 'Bedroom Heater', type: 'heater', status: 'off', consumption: 0, location: 'Bedroom' },
    ],
    usageData: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      usage: Math.random() * 3 + (i >= 17 && i <= 22 ? 2 : 0.5)
    }))
  };
};

// Generate random recommendation based on current data
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

// Weather icon selection based on condition
const WeatherIcon = ({ condition }) => {
  switch(condition) {
    case 'Sunny': return <Sun className="text-yellow-500" size={28} />;
    case 'Cloudy': return <Cloud className="text-gray-500" size={28} />;
    case 'Rainy': return <CloudRain className="text-blue-500" size={28} />;
    case 'Windy': return <Wind className="text-blue-300" size={28} />;
    default: return <Sun className="text-yellow-500" size={28} />;
  }
};

// Device icon selection based on type
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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(generateFakeData());
  const [timeFilter, setTimeFilter] = useState('day');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Simulate real-time data updates
  useEffect(() => {
    const timer = setInterval(() => {
      setData(generateFakeData());
      setCurrentTime(new Date());
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Calculate total current energy consumption
  const totalEnergyConsumption = data.devices
    .filter(device => device.status === 'on')
    .reduce((total, device) => total + device.consumption, 0).toFixed(2);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Navigation Bar */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-green-700'} p-4 text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home size={24} />
            <h1 className="text-xl font-bold">EcoSense IoT Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              {currentTime.toLocaleTimeString()}
            </div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-600'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Monitor and control your IoT devices from one central location
          </p>
        </div>
        
        {/* Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Device Count Card */}
          <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-between items-center`}>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Devices</p>
              <p className="text-2xl font-bold">{data.totalDevices}</p>
              <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                {data.activeDevices} active
              </p>
            </div>
            <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
              <Monitor className={`${darkMode ? 'text-green-400' : 'text-green-500'}`} size={24} />
            </div>
          </div>
          
          {/* Energy Usage Card */}
          <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-between items-center`}>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Current Usage</p>
              <p className="text-2xl font-bold">{totalEnergyConsumption} kWh</p>
              <p className={data.currentUsage > 2.5 ? 'text-red-500' : 'text-green-500'}>
                {data.currentUsage > 2.5 ? 'High usage' : 'Efficient'}
              </p>
            </div>
            <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
              <Zap className={`${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={24} />
            </div>
          </div>
          
          {/* Temperature Card */}
          <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-between items-center`}>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Temperature</p>
              <p className="text-2xl font-bold">{data.temperature.indoor}°C</p>
              <div className="flex items-center">
                <p className={`text-sm ${Number(data.temperature.indoor) > Number(data.temperature.outdoor) ? 'text-red-500' : 'text-green-500'} flex items-center`}>
                  {Number(data.temperature.indoor) > Number(data.temperature.outdoor) ? 
                    <ArrowUp size={14} className="mr-1" /> : 
                    <ArrowDown size={14} className="mr-1" />
                  }
                  Outdoor: {data.temperature.outdoor}°C
                </p>
              </div>
            </div>
            <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
              <Thermometer className={`${darkMode ? 'text-red-400' : 'text-red-500'}`} size={24} />
            </div>
          </div>
          
          {/* Weather Card */}
          <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-between items-center`}>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Weather</p>
              <p className="text-2xl font-bold">{data.weather}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Humidity: {data.humidity}%
              </p>
            </div>
            <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
              <WeatherIcon condition={data.weather} />
            </div>
          </div>
        </div>
        
        {/* Energy Usage Graph */}
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
        
        {/* Bottom Section - Device Status and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Devices List */}
          <div className={`col-span-2 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="font-semibold mb-4">Active Devices</h3>
            <div className="space-y-3">
              {data.devices.map(device => (
                <div 
                  key={device.id} 
                  className={`p-3 rounded-lg flex justify-between items-center ${
                    device.status === 'on' ? 
                    (darkMode ? 'bg-gray-700' : 'bg-green-50') : 
                    (darkMode ? 'bg-gray-900 opacity-60' : 'bg-gray-100 opacity-70')
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${
                      device.status === 'on' ? 
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
                    <div className={`px-2 py-1 rounded text-xs ${
                      device.status === 'on' ? 
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
          
          {/* Recommendations Panel */}
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
        </div>
      </div>
    </div>
  )
}

export default App