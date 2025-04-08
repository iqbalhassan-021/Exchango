import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import FAQsComp from '../Components/FAQsComp'
import Notifications from '../Components/Notifications'

function FAQs() {
  return (
    <>
        <div className="page-wrapper">
            <Notifications/>
            <NavigationBar/>
            <FAQsComp/>
            <Footer/>
        </div>
    </>
  )
}

export default FAQs