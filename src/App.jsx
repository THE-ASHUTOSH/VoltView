import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataProvider from './Context/Data'
import DevicesPage from './Pages/DevicesPage'
import WeatherPageContext from './Context/WeatherPageContext'
import WeatherPage from './Pages/WeatherPage'
import WeatherPageContextProvider from './Context/WeatherPageContext'


const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider >
        <DataProvider>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/weather" element={
              <WeatherPageContextProvider>
                <WeatherPage />
              </WeatherPageContextProvider>
            } />
          </Routes>
        </DataProvider>
      </DarkModeProvider>
    </BrowserRouter>

  )
}

export default App