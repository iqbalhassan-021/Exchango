import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Notifications from '../Components/Notifications'
import Aboutus from '../Components/Aboutus'

function About() {
  return (
    <>
        <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <Aboutus/>
        <Footer/>
        </div>
    </>
  )
}

export default About