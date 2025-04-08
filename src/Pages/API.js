import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Notifications from '../Components/Notifications'
import ApiDoc from '../Components/ApiDoc'

function API() {
  return (
   
    <>
        <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <ApiDoc/>
        <Footer/>
        </div>
    </>
  )
}

export default API