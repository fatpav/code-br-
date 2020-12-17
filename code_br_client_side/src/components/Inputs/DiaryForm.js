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
                <Sleep diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)} handleSlide={handleSlide} buttonChange={buttonChange}/>
                <ScreenTime diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)} handleSlide={handleSlide} buttonChange={buttonChange}/>
                <WaterIntake diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)} handleSlide={handleSlide} buttonChange={buttonChange}/>
                <Breathing diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)} handleSlide={handleSlide} buttonChange={buttonChange}/>
                <Meditation diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)} handleSlide={handleSlide} buttonChange={buttonChange}/>
                {/* <Link 
                    to='/'> <button>Home</button>
                </Link> */}
        </div>
        </>
        )
}

export default DiaryForm;