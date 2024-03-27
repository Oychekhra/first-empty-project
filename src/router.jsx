import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './home'
import About from './About'
import ClientsComponent from './clients'
import Services from './services'
import Contacts from './contacts'
import Navbar from './navbar'
import Waitingroom from './waitingroom'

const RouterComponent = () => {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
        <Route path='/' element={<HomeComponent />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Clients' element={<ClientsComponent />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Contacts/Caller' element={< Waitingroom />} />
        
    </Routes>
   </BrowserRouter>
  )
}

export default RouterComponent
