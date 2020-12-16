import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (


        <div class="navbar">
            <Link class="navbuttons" to="/">Home</Link> <Link class="navbuttons" to="/journal">Journal</Link> <Link class="navbuttons" to="/activities">Activities</Link> <Link class="navbuttons" to="/mystats">My Stats</Link>
        </div>


    )
}

export default NavBar;