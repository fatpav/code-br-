import ScreenTime from './Screentime';
import Sleep from './Sleep';
import WaterIntake from './WaterIntake';
import Breathing from './Breathing';
import Meditation from './Meditation';
import { Link } from 'react-router-dom';


const DiaryForm = ({diary, handleUpdate}) => {


    
    return (
        <>
        <h1>Diary entry here</h1>
        <Sleep diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <ScreenTime diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <WaterIntake diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <Breathing diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <Meditation diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
            {/* <Link 
                to='/'> <button>Home</button>
            </Link> */}
        </>
        )
}

export default DiaryForm;