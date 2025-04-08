import React from 'react'
import Notifications from '../Components/Notifications'
import ContactForm from '../Components/ContactForm'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
    <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <ContactForm/>
        <Footer/>
    </div>
    </>
  )
}

export default Contact