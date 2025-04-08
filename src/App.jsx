import React from 'react'
import DashBoard from './Pages/DashBoard'
import { DarkModeProvider } from './Context/DarkmodeContext'

const App = () => {
  return (
    <DarkModeProvider>
      <DashBoard/>
    </DarkModeProvider>
    
  )
}

export default App