import {Link} from 'react-router-dom'
import Loading from './Loading';
import DiaryForm from '../components/Inputs/DiaryForm';


const StartScreen = ({diaryEntry}) =>{

    const dateObj = new Date();
    const month = dateObj.getMonth()+1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear().toString().slice(-2);
    const today = `${day}/${month}/${year}`
    
    let componentToRender 

    if (diaryEntry.length && diaryEntry[diaryEntry.length -1].date !== today){
        componentToRender = <DiaryForm />
    } else {
        componentToRender = <h1>Home Page</h1>
    }



    return (
        <>
        {componentToRender}
        </>
    )
}

export default StartScreen;