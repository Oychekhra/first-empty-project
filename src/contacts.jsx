import React from 'react'
import Caller from './caller'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <div style={{display:'flex', marginRight:'20px', alignItems:'center'}}>
      Contacts
      <Link to='/Contacts/Caller'>
      <Caller />
      </Link>
    </div>
  )
}

export default Contacts
