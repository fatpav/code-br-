import React from 'react';
import ReactPlayer from 'react-player';
import Timer from './Timer';


const Meditate = () => {
    


    return (
        <>
            
            <h2>Meditate</h2>
            <h2>Take some time out of your day and relax.  Just press Play!</h2>
            <div class="soundcloudbar">
                <iframe width="25%" height="20" scrolling="no" frameborder="no" allow="auto_play"
                    src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-16685247/sets/codebreak-reiki-zen" >
                </iframe>
            </div>
            {/* <ReactPlayer 
            url="https://soundcloud.com/user-16685247/sets/codebreak-reiki-zen" playing={true}>
            </ReactPlayer> */}
            <Timer />
        </>
    );
};

export default Meditate;