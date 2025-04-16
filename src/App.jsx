import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <DarkModeProvider >
        <DashBoard/>
      </DarkModeProvider>
    </BrowserRouter>
    
  )
}

export default App