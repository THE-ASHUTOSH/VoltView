import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './Context/Data'
import DevicesPage from './Pages/DevicesPage'

const App = () => {
  return (
    <BrowserRouter>
    <DarkModeProvider >
      <DataProvider>
        <DashBoard/>
        {/* <DevicesPage/> */}
      </DataProvider>
      </DarkModeProvider>
    </BrowserRouter>
    
  )
}

export default App