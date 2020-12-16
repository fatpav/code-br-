import ScreenTime from './Screentime';
import Sleep from './Sleep';
import WaterIntake from './WaterIntake';


const DiaryForm = ({diary, handleUpdate}) => {


    
    return (
        <>
        <h1>Diary entry here</h1>
        <Sleep diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <ScreenTime diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <WaterIntake diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        </>
        )
}

export default DiaryForm;