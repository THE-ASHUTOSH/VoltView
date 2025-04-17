import React, { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import { DarkModeContext } from "../Context/DarkmodeContext";
import Header from "../Components/DashBoardComponents/Header";
import Card from "../Components/DashBoardComponents/Card";
import { Home, 
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
  Tv } from "lucide-react";
import { DataContext } from "../Context/Data";
import GraphView from "../Components/DashBoardComponents/GraphView";
import DeviceStatus from "../Components/DashBoardComponents/DeviceStatus";
import Suggestion from "../Components/DashBoardComponents/Suggestion";


const WeatherIcon = ({ condition }) => {
  switch(condition) {
    case 'Sunny': return Sun;
    case 'Cloudy': return Cloud;
    case 'Rainy': return CloudRain 
    case 'Windy': return Wind 
    default: return Sun;
  }
};

const DashBoard = () => {
  const { darkMode } = useContext(DarkModeContext);
  const data = useContext(DataContext);

  const totalEnergyConsumption = data.devices
    .filter(device => device.status === 'on')
    .reduce((total, device) => total + device.consumption, 0).toFixed(2);
  
  return (
    <>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        <NavBar />
        <div className="container mx-auto px-4 py-6">
          <Header/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card title={"Total Users"} Icon={Monitor}>
            <p className="text-2xl font-bold">{data.totalDevices}</p>
              <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                {data.activeDevices} active
              </p>
            </Card>
            <Card title={"Current Usage"} Icon={Zap}>
            <p className="text-2xl font-bold">{totalEnergyConsumption} kWh</p>
              <p className={data.currentUsage > 2.5 ? 'text-red-500' : 'text-green-500'}>
                {data.currentUsage > 2.5 ? 'High usage' : 'Efficient'}
              </p>
            </Card>
            <Card title={"Temperature"} Icon={Thermometer}>
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
            </Card>
            <Card title={"Weather"} Icon={WeatherIcon(data.weather)}>
            <p className="text-2xl font-bold">{data.weather}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Humidity: {data.humidity}%
              </p>
            </Card>
          </div>
          <GraphView/>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DeviceStatus/>
            <Suggestion/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
