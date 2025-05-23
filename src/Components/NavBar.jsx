import React, { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from '../Context/DarkmodeContext';
import { Clock, Home, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-green-700'} p-4 text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-end justify-between space-x-4">
          <Home size={30} />
          <h1 className="text-2xl font-bold">VOLTVIEW</h1>
        </div>

        <div className="flex items-end justify-between space-x-5">
          <NavLink to='/' className={({ isActive }) =>
            `transition-all duration-200 p-3 ${isActive ? 'border-b-3 border-white' : ''}`}>Dashboard</NavLink>
          <NavLink to='/devices' className={({ isActive }) =>
            `transition-all duration-200 p-3 ${isActive ? 'border-b-3 border-white' : ''}`}>Devices</NavLink>
          <NavLink to='/weather' className={({ isActive }) =>
            `transition-all duration-200 p-3 ${isActive ? 'border-b-3 border-white' : ''}`}>Weather</NavLink>
          <NavLink to='/report' className={({ isActive }) =>
            `transition-all duration-200 p-3 ${isActive ? 'border-b-3 border-white' : ''}`}>Reports</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock size={25} className="mr-2" />
          </div>
          <button
            onClick={() => toggleDarkMode()}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-600'}`}
          >
            {darkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar