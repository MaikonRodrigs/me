import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { UseDataContext } from '@/hooks/useContext'
import usePersistedState from '@/hooks/usePersistedState'

import Home from './pages/home/index'
import Welcome from './pages/welcome'

import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/GlobalStyle'


function App() {
  const [theme, setTheme] = usePersistedState('theme', light, 5000)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  };
  return (
    <UseDataContext>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Welcome toggleTheme={toggleTheme} />} />
            <Route path="/home" element={<Home toggleTheme={toggleTheme} />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter >
    </UseDataContext>
  )
}

export default App
