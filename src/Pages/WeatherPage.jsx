import { useState, useEffect, useContext } from 'react';
import {
    Home,
    Clock,
    Sun,
    Moon,
    Cloud,
    CloudRain,
    Wind,
    CloudSnow,
    CloudLightning,
    CloudDrizzle,
    Thermometer,
    Droplets,
    ArrowUp,
    ArrowDown,
    MapPin,
    Search,
    Compass,
    Eye,
    Umbrella
} from 'lucide-react';
import { DarkModeContext } from '../Context/DarkmodeContext';
import { use } from 'react';
import { WeatherPageContext } from '../Context/WeatherPageContext';
import NavBar from '../Components/NavBar';
import WeatherDetails from '../Components/WeatherPageComponents/WeatherDetails';

// Sample data from API


// Generate forecast data (in a real app, this would come from the API)


const generateForecastData = (currentData) => {
    // console.log(currentData);
    const baseTemp = currentData.current.temp_c;
    const condition = currentData.current.condition.text;

    // Map common weather API condition texts to our condition keys
    const getConditionKey = (text) => {
        text = text.toLowerCase();
        if (text.includes('rain') || text.includes('drizzle')) return 'Rainy';
        if (text.includes('cloud')) return 'Cloudy';
        if (text.includes('sun') || text.includes('clear')) return 'Sunny';
        if (text.includes('snow')) return 'Snowy';
        if (text.includes('wind')) return 'Windy';
        if (text.includes('thunder') || text.includes('lightning')) return 'Thunderstorm';
        return 'Cloudy'; // Default
    };

    const currentCondition = getConditionKey(condition);

    // Days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();



    // Generate daily forecast
    const forecast = [];
    for (let i = 0; i < 5; i++) {
        const day = new Date();
        day.setDate(day.getDate() + i);

        // First day is today with current condition
        const dayCondition = i === 0 ? currentCondition :
            ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)];

        forecast.push({
            day: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : days[day.getDay()],
            condition: dayCondition,
            high: Math.round(baseTemp + (Math.random() * 3 + 1)),
            low: Math.round(baseTemp - (Math.random() * 3 + 2)),
            precipitation: dayCondition === 'Rainy' ? Math.floor(Math.random() * 50 + 30) : Math.floor(Math.random() * 20)
        });
    }

    return {
        forecast,
        sunrise: '6:15 AM',
        sunset: '8:05 PM',
        nearbyLocations: ['Birmingham', 'Manchester', 'Liverpool', 'Glasgow', 'Edinburgh']
    };
};

export default function WeatherPage() {
    const { darkMode } = useContext(DarkModeContext);
    const { weatherData } = useContext(WeatherPageContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('daily'); // 'daily' or 'hourly'
    const [forecastData, setForecastData] = useState(undefined);


    useEffect(() => {
        if (weatherData) {
            setForecastData(generateForecastData(weatherData));
        }
    }, [weatherData]);
    // Simulate real-time data updates
    console.log(weatherData);
    if (weatherData == undefined||forecastData == undefined) {
        return (
            <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
                <NavBar />
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-center items-center h-64">
                        <p>Loading weather data...</p>
                    </div>
                </div>
            </div>
        );
    }
    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        // In a real app, this would fetch data for the searched location
        if (searchQuery.trim()) {
            const newData = { ...weatherData };
            newData.location.name = searchQuery;
            // setWeatherData(newData);
            setSearchQuery('');
        }
    };


    // Weather icon selection based on condition
    const WeatherIcon = ({ condition, size = 28 }) => {
        // Map condition text to icon
        const getIconComponent = (condition) => {
            condition = condition.toLowerCase();

            if (condition.includes('rain') || condition.includes('drizzle'))
                return <CloudRain className="text-blue-500" size={size} />;
            if (condition.includes('cloud'))
                return <Cloud className="text-gray-500" size={size} />;
            if (condition.includes('sunny') || condition.includes('clear'))
                return <Sun className="text-yellow-500" size={size} />;
            if (condition.includes('snow'))
                return <CloudSnow className="text-blue-200" size={size} />;
            if (condition.includes('wind'))
                return <Wind className="text-blue-300" size={size} />;
            if (condition.includes('thunder') || condition.includes('lightning'))
                return <CloudLightning className="text-purple-500" size={size} />;
            if (condition.includes('mist') || condition.includes('fog'))
                return <CloudDrizzle className="text-blue-400" size={size} />;

            // Default
            return <Cloud className="text-gray-500" size={size} />;
        };

        return getIconComponent(condition);
    };

    
    return (
        // console.log(weatherData),
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-6">
                {/* Location Search */}
                <div className="mb-6">
                    <form onSubmit={handleSearch} className="flex">
                        <div className={`flex-1 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-l-lg p-2 shadow`}>
                            <MapPin size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                            <input
                                type="text"
                                placeholder="Search location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`ml-2 w-full outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white p-2 rounded-r-lg shadow`}
                        >
                            <Search size={20} />
                        </button>
                    </form>
                </div>

                {/* Current Weather Card */}
                <div className={`p-6 rounded-lg shadow mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center">
                                <MapPin size={24} className="mr-2" />
                                {weatherData.location.name}
                            </h2>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {weatherData.location.region}, {weatherData.location.country}
                            </p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Last updated: {weatherData.current.last_updated}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">{weatherData.current.temp_c}°C</div>
                            <div className="flex items-center justify-end">
                                <span className="text-sm text-green-500 flex items-center mr-2">
                                    <ArrowUp size={14} className="mr-1" />
                                    {forecastData.forecast[0].high}°
                                </span>
                                <span className="text-sm text-blue-500 flex items-center">
                                    <ArrowDown size={14} className="mr-1" />
                                    {forecastData.forecast[0].low}°
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className={`p-4 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
                                <WeatherIcon condition={weatherData.current.condition.text} size={48} />
                            </div>
                            <div>
                                <div className="text-xl font-medium">{weatherData.current.condition.text}</div>
                                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Feels like {weatherData.current.feelslike_c}°C
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Droplets className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
                                <div>
                                    <div className="text-sm font-medium">Humidity</div>
                                    <div className="text-lg">{weatherData.current.humidity}%</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Wind className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
                                <div>
                                    <div className="text-sm font-medium">Wind</div>
                                    <div className="text-lg">{weatherData.current.wind_kph} km/h</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Weather Details and Air Quality */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Weather Details */}
                    <WeatherDetails />

                    {/* Sunrise/Sunset and Energy Impact */}
                    <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="font-semibold mb-4">Energy Impact</h3>
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <Sun className="text-yellow-500 mr-2" size={20} />
                                    <p>Sunrise</p>
                                </div>
                                <p className="font-medium">{forecastData.sunrise}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <Moon className="text-blue-300 mr-2" size={20} />
                                    <p>Sunset</p>
                                </div>
                                <p className="font-medium">{forecastData.sunset}</p>
                            </div>
                        </div>

                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900' : 'bg-green-50'} mb-4`}>
                            <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
                                {weatherData.current.condition.text.toLowerCase().includes('rain')
                                    ? "Rain detected. Solar panel efficiency may be reduced by 40-60%. Consider optimizing indoor energy use."
                                    : weatherData.current.cloud > 50
                                        ? `${weatherData.current.cloud}% cloud cover. Solar energy production may be reduced by approximately ${Math.round(weatherData.current.cloud / 2)}%.`
                                        : "Good weather conditions for solar energy production. Expect good energy generation today."
                                }
                            </p>
                        </div>

                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                            <h4 className={`font-medium text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Weather-Based Energy Recommendation
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {weatherData.current.temp_c > 20
                                    ? "Higher temperatures detected. Consider reducing AC usage and using natural ventilation."
                                    : weatherData.current.temp_c < 10
                                        ? "Cold weather ahead. Ensure your heating system is optimized for efficiency."
                                        : `Mild temperature at ${weatherData.current.temp_c}°C - ideal for energy conservation. Open windows instead of using climate control.`
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Location Map and Coordinates */}
                <div className={`p-4 rounded-lg shadow mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className="font-semibold mb-4">Location Data</h3>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Coordinates</p>
                            <p className="font-medium">Lat: {weatherData.location.lat}, Lon: {weatherData.location.lon}</p>
                            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Time Zone</p>
                            <p className="font-medium">{weatherData.location.tz_id}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            {forecastData.nearbyLocations.map((location, index) => (
                                <button
                                    key={index}
                                    onClick={() => setWeatherData({ ...weatherData, location: { ...weatherData.location, name: location } })}
                                    className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-green-100 hover:bg-green-200'
                                        }`}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}