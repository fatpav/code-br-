import ScreenTime from './Screentime';
import Sleep from './Sleep';

const DiaryForm = (diary) => {


    
    return (
        <>
        <h1>Diary entry here</h1>
        {/* <ScreenTime /> */}
        <Sleep diary={diary}/>
        </>
        )
}

export default DiaryForm;