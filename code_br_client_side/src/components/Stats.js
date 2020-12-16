import React from 'react';
import { Link } from 'react-router-dom';

const Stats = () => {
    return (
        <>
            <h2>My Stats</h2>
            <div class="navbar">

                <Link to="/sleep">
                    <button class="navbuttons" > Sleep</button>
                </Link>

                {/* <Link to="/mood">
                <button class="navbuttons" >Mood</button>
            </Link> */}

                <Link to="/waterintake">
                    <button class="navbuttons" >Water Intake</button>
                </Link>

                <Link to="/screentime">
                    <button class="navbuttons" >Screentime</button>
                </Link>


                <Link to="/detail">
                    <button class="navbuttons" >Daily Stats</button>
                </Link>


                <Link to="/tracker">
                    <button class="navbuttons" >Tracker</button>
                </Link>
            </div>




        </>
    )
}

export default Stats;