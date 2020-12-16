import { useEffect } from 'react';
import {useState} from 'react';
import Loading from './Loading';
import {StarOutline, ThumbUpOutline} from 'heroicons-react';

const StartScreen = () =>{



    

    return (
        <>
                <div class="navbar">
                <ThumbUpOutline size={52}/>
                </div>
                <div class="navbar">
                <h1>Let's start the day right!</h1>
                </div>


        
        </>
    )
}

export default StartScreen;