import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import DataProvider from './Context/Data'
import DevicesPage from './Pages/DevicesPage'
import WeatherPageContext from './Context/WeatherPageContext'


const App = () => {
  return (
    <BrowserRouter>
    <DarkModeProvider >
      <DataProvider>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/devices" element={<DevicesPage />} />
        </Routes>
      </DataProvider>
      {/* <WeatherPageContext/> */}
      </DarkModeProvider>
    </BrowserRouter>
    
  )
}

export default App