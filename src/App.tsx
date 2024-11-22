import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Converter from './components/Converter'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Features />
        <Converter />
        <Testimonials />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App

