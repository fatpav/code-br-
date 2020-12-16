import ScreenTime from './Screentime';
import Sleep from './Sleep';


const DiaryForm = ({diary, handleUpdate}) => {


    
    return (
        <>
        <h1>Diary entry here</h1>
        {/* <ScreenTime /> */}
        <Sleep diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        <ScreenTime diary={diary} handleUpdate={(property, value)=>handleUpdate(property, value)}/>
        </>
        )
}

export default DiaryForm;