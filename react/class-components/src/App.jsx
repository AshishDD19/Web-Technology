import React from 'react'
import './App.css'
import Header from './components/Header'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Aside from './components/Aside'

function App() {


  return (
    <>
      <Header />
      <Navigation />
      <div className='section'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
