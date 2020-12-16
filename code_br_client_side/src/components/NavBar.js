import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutline, BookOpenOutline, PresentationChartBarOutline, EmojiHappyOutline } from "heroicons-react";
import { Tooltip } from '@material-ui/core';





const NavBar = () => {
    return (

        <div class="navbar">
            {/* <Tooltip title="Home" /> */}
            <Link class="navbuttons" to="/"><HomeOutline /></Link>

            <Link class="navbuttons" to="/journal"><BookOpenOutline /></Link>
            <Link class="navbuttons" to="/activities"><EmojiHappyOutline /></Link>
            <Link class="navbuttons" to="/detail"><PresentationChartBarOutline /></Link>

        </div>


    )
}

export default NavBar;

