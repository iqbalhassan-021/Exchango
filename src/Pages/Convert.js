import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Notifications from '../Components/Notifications'
import ConvertComp from '../Components/ConvertComp'

function Convert() {
  return (
    <>
        <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <ConvertComp/>
        <Footer/>
        </div>
    </>
  )
}

export default Convert