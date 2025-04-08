import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Notifications from '../Components/Notifications'
import NewsHolder from '../Components/NewsHolder'

function News() {
  return (
    <>
        <div className="page-wrapper">
        <Notifications/>
        <NavigationBar/>
        <NewsHolder/>
        <Footer/>
        </div>
    </>
  )
}

export default News