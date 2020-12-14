import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
    
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/journal">Journal</Link>
            </li>

            <li>
                <Link to="/activities">Activities</Link>
            </li>

            <li>
                <Link to="/mystats">My Stats</Link>
            </li>
        </ul>
        
    )
}

export default NavBar;