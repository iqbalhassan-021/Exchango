import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import SupportForm from '../Components/SupportForm'
import Notifications from '../Components/Notifications'



function Support() {
  return (
    <>
    <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <SupportForm/>
        <Footer/>
    </div>
    </>
  )
}

export default Support