import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WeatherPageContext = () => {
    const [location, setlocation] = useState("Benguluru")
    useEffect(() => {
        async function getWeatherData() {
            try{
            const resopnse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=21937f7fa61c4d159e152858251002&q=${location}&aqi=no`)
            console.info(resopnse)
            console.log(resopnse.data)
            }catch(error){
                console.error("Error fetching weather data", error)
            }
        }
        getWeatherData()
    }, [])

    return (
        <div>WeatherPageContext</div>
    )
}

export default WeatherPageContext