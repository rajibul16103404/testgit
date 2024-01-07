import React from 'react'
import './App.css'
import './Responsive.css'
import Navbar from './components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import Popular from './Components/Popular/Popular'
import Recommended from './Components/Recommended/Recommended'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='full_container'>
          <Navbar/>
          <Hero/>
          <Popular/>
          <Recommended/>
          <Footer/>
    </div>
  )
}

export default App