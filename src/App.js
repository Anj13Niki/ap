import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Footer from './sections/Footer/Footer'
import Header from './sections/Header/Header'
import Portfolio from './sections/portfolio/Portfolio'
// import DarkMode from './sections/darkmode/DarkMode'


export default function App(){
    return(
        <>
            <main>
                <Navbar/>
                {/* <DarkMode/> */}
                <Header/>
                
                <About/>
                <Portfolio/>
                <Contact/>
                <Footer/>
                
            </main>
        </>
    )
}