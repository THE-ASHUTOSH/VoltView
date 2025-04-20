import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const WeatherPageContext = createContext();
const WeatherPageContextProvider = ({children}) => {
    const sampleApiData = {
        "location": {
            "name": "Bangalore",
            "region": "Karnataka",
            "country": "India",
            "lat": 12.9833,
            "lon": 77.5833,
            "tz_id": "Asia/Kolkata",
            "localtime_epoch": 1745043294,
            "localtime": "2025-04-19 11:44"
        },
        "current": {
            "last_updated_epoch": 1745042400,
            "last_updated": "2025-04-19 11:30",
            "temp_c": 29.0,
            "temp_f": 84.2,
            "is_day": 1,
            "condition": {
                "text": "Sunny",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                "code": 1000
            },
            "wind_mph": 5.6,
            "wind_kph": 9.0,
            "wind_degree": 316,
            "wind_dir": "NW",
            "pressure_mb": 1015.0,
            "pressure_in": 29.97,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 62,
            "cloud": 25,
            "feelslike_c": 28.7,
            "feelslike_f": 83.7,
            "windchill_c": 31.4,
            "windchill_f": 88.4,
            "heatindex_c": 31.6,
            "heatindex_f": 88.9,
            "dewpoint_c": 15.3,
            "dewpoint_f": 59.6,
            "vis_km": 6.0,
            "vis_miles": 3.0,
            "uv": 10.5,
            "gust_mph": 6.4,
            "gust_kph": 10.4
        }
    };
    const [location, setlocation] = useState("India")
    const [weatherData, setWeatherData] = useState()
    useEffect(() => {
        async function getLocation() {
            try {
                const response = await axios.get("http://ip-api.com/json")
                // console.log(response.data.city)
                setlocation(response.data.city)
            }catch (error) {
                console.log("Error fetching location data", error)
            }
        }
        getLocation()
    },[])
    useEffect(() => {
        async function getWeatherData() {
            try{
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=21937f7fa61c4d159e152858251002&q=${location}&aqi=no`)
            // console.info(response)
            // console.log(response.data)
            setWeatherData(response.data)
            }catch(error){
                console.log("Error fetching weather data", error)
                alert("Location not found")
            }
        }
        getWeatherData()
    }, [location])

    return (
        <WeatherPageContext.Provider value={{weatherData,setlocation}}>
            {children}
        </WeatherPageContext.Provider>
    )
}

export default WeatherPageContextProvider