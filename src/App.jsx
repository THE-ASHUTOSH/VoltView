import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataProvider from './Context/Data'
import DevicesPage from './Pages/DevicesPage'
import WeatherPageContext from './Context/WeatherPageContext'
import WeatherPage from './Pages/WeatherPage'
import WeatherPageContextProvider from './Context/WeatherPageContext'
import ReportPage from './Pages/ReportPage'


const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider >
        <DataProvider>
          <WeatherPageContextProvider>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/devices" element={<DevicesPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/report" element={<ReportPage />}></Route>
            </Routes>
          </WeatherPageContextProvider>
        </DataProvider>
      </DarkModeProvider>
    </BrowserRouter>

  )
}

export default App