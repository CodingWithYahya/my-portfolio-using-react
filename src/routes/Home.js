import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Card/>
        <Footer />
        
    </div>
  )
}

export default Home