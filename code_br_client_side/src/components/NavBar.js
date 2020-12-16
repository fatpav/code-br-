import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutline, BookOpenOutline, PresentationChartBarOutline, EmojiHappyOutline } from "heroicons-react";
import { Tooltip } from '@material-ui/core';





const NavBar = () => {
    return (

        <div class="navbar">
            {/* <Tooltip title="Home" /> */}
            <Link class="navbuttons" to="/"><abbr class="tooltip"title="Home"><HomeOutline /></abbr></Link>

            <Link class="navbuttons" to="/journal"><abbr class="tooltip" title="Journal"><BookOpenOutline /></abbr></Link>
            <Link class="navbuttons" to="/activities"><abbr class="tooltip" title="Activities"><EmojiHappyOutline /></abbr></Link>
            <Link class="navbuttons" to="/detail"><abbr class="tooltip" title="My Stats"><PresentationChartBarOutline /></abbr></Link>

        </div>


    )
}

export default NavBar;

