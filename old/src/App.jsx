import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Welcome from '@/pages/Welcome'
import Homepage from '@/pages/Homepage'
import { GlobalStyle } from '@/styles/GlobalStyle'


import { ThemeProvider } from 'styled-components'
import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Welcome toggleTheme={toggleTheme} />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
