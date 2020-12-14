import React from 'react';
import { Link } from 'react-router-dom';

const Stats = () => {
    return (
        <>
            <h2>Stats</h2>

            <Link to= "/sleep">
                <button>Sleep</button>
            </Link>

            <Link to= "/mood">
                <button>Mood</button>
            </Link>

            <Link to="/waterintake">
                <button>Water Intake</button>
            </Link>

            <Link to= "/screentime">
                <button>Screentime</button>
            </Link>


            <Link to= "/detail">
                <button>Detail</button>
            </Link>


            <Link to= "/tracker">
                <button>Tracker</button>
            </Link>
        </>
    )
}

export default Stats;