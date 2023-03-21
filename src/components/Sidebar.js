import React from 'react'
import {Link} from 'react-router-dom'
import '../css/dashboard.css'
const Sidebar = () => {
  return (
    <div className='opt'>
        <ul className='optList'>
            <li>
                <Link to='/skillmen' className='link'>Active Jobs</Link>
            </li>
            <li>
                <Link to='/rating' className='link'>Your Ratings</Link>
            </li>
            <li>
                <Link to='/pastJobs' className='link'>Past Jobs</Link>
            </li>
            <li>
                <Link to='/performance' className='link'>Performance</Link>
            </li>
            <li>
                <Link to='/chooseJob' className='link'>Choose Job</Link>
            </li>
               
        </ul>
    </div>
  )
}

export default Sidebar