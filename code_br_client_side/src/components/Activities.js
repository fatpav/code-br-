import { Link } from 'react-router-dom';
import React from 'react';

import Breathe from "./Exercises/Breathe";
import Meditate from "./Exercises/Meditate";
import Yoga from "./Exercises/Yoga";
import Inspire from "./Inspire";

const Activities = () => {
    return (
        <>
        <h2>Space for activities</h2>
        <Link to="/meditate">
        <button>
            Meditate
        </button>
       </Link>

        <Link to="/breathe">
        <button>Breathe</button>
        </Link>

        <Link to="/yoga">
        <button>Yoga</button>
        </Link>

        <Link to="/inspire">
        <button>Inspire</button>
        </Link>
        </>
    )
}

export default Activities;