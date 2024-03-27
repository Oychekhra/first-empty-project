import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',padding:'20px', backgroundColor:'lightblue'}}>
     <Link to="/" style={{textDecoration:'none',color:'black'}}>
     <p style={{cursor:'pointer'}}>Home</p>
     </Link>
     <Link to="/About" style={{textDecoration:'none',color:'black'}}>
     <p style={{cursor:'pointer'}}>About</p>
     </Link>
     <Link to="/Clients" style={{textDecoration:'none',color:'black'}}>
     <p style={{cursor:'pointer'}}>Clients</p>
     </Link>
     <Link to="/Services" style={{textDecoration:'none',color:'black'}}>
     <p style={{cursor:'pointer'}}>Services</p>
     </Link>
     <Link to="Contacts" style={{textDecoration:'none',color:'black'}}>
     <p style={{cursor:'pointer'}}>Contact</p> 
     </Link>
    </div>
  )
}

export default Navbar
