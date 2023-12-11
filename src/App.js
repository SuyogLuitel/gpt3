import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './container/header/Header'
import Brand from './components/brand/Brand'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
import Features from './container/features/Features'
import Possibility from './container/possibility/Possibility'
import CTA from './components/cta/CTA'
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer'

const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
