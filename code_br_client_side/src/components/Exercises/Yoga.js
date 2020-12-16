import React from 'react';

const Yoga = () => {

    return (

        <>
            <h2>Yoga</h2>
            <div class="yogabox">
                <ul class="scrollable-list">
                    <li>
                        <h3>5 minute Yoga</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nQFf38xeBww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>

                    <li>
                        <h3>10 minute Yoga</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VaoV1PrYft4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>

                    <li>
                        <h3>20 minute Yoga</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GGJzZx4H2K4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                </ul>
            </div>

        </>
    )
};

export default Yoga;