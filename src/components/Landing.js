import React from 'react'
import { Link } from 'react-router-dom'
import '../css/landing.css'

const Landing = () => {
 
  return (
    <div className='landing'>
      <div className='name'>  <h1>What are possible scenarios for employment growth?</h1></div>
    <div className='landingBtn'>
        <button ><Link to='/skillmen'  className='sb'>LOGIN AS SKILLMEN</Link> </button>
        <button ><Link to='/citizen' className='cb'>LOGIN AS CITIZEN</Link> </button>
    </div>
    </div>
  )
}

export default Landing