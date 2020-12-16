import { Link } from 'react-router-dom';
import React from 'react';

import Breathe from "./Exercises/Breathe";
import Meditate from "./Exercises/Meditate";
import Yoga from "./Exercises/Yoga";
import Inspire from "./Inspire";

const Activities = () => {
    return (
        <>
            <h2>Activities</h2>
            <Link to="/meditate">
                <button class="navbuttons" >
                    Meditate
        </button>
            </Link>

            <Link to="/breathe">
                <button class="navbuttons" >Breathe</button>
            </Link>

            <Link to="/yoga">
                <button class="navbuttons" >Yoga</button>
            </Link>

            <Link to="/inspire">
                <button class="navbuttons" >Inspire</button>
            </Link>
        </>
    )
}

export default Activities;