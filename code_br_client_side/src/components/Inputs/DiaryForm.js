import ScreenTime from './Screentime';
import Sleep from './Sleep';
import WaterIntake from './WaterIntake';
import Breathing from './Breathing';
import Meditation from './Meditation';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const DiaryForm = ({diary, handleUpdate}) => {

    const [buttonText, setButtonText] = useState("Add Entry");
    const [disabled, setDisabled] = useState(false);

    function buttonChange() {
        if(disabled === false){
           setButtonText("Submitted")
           setDisabled(true)
        }
   };

   function handleSlide() {
           setButtonText("Update Entry")
           setDisabled(false)
   };

    
    return (
        <>
        <div className="slidercenter">
            <h1>Diary entry here</h1>
                <Sleep diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
                <ScreenTime diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
                <WaterIntake diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
                <Breathing diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
                <Meditation diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
                {/* <Link 
                    to='/'> <button>Home</button>
                </Link> */}
        </div>
        <div class="navbar">
        <a href="/journal" class="navbuttons">Finish your day with a Journal entry.</a>
        </div>
        </>
        )
}

export default DiaryForm;