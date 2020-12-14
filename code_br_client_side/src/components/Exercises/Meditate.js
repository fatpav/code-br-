import React from 'react';
import ReactPlayer from 'react-player';

const Meditate = () => {
    return (
        <>
            <h2>Come on, we're meditating over here</h2>

            <iframe width="25%" height="20" scrolling="no" frameborder="no" allow="auto_play"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-16685247/sets/codebreak-reiki-zen" >
            </iframe>

            {/* <ReactPlayer 
            url="https://soundcloud.com/user-16685247/sets/codebreak-reiki-zen" playing={true}>
            </ReactPlayer> */}
            
        </>
    )
};

export default Meditate;