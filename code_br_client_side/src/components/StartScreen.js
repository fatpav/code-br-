import {Link} from 'react-router-dom'
import Loading from './Loading';
import DiaryForm from '../components/Inputs/DiaryForm';
import axios from 'axios';
import { useState, useEffect } from 'react';


const StartScreen = ({diaryEntry, handleUpdate}) =>{


    const [diaryCreated, setDiaryCreated] = useState(false)

    const dateObj = new Date();
    const month = dateObj.getMonth()+1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear().toString().slice(-2);
    const today = `${day}/${month}/${year}`
    
    let componentToRender 


    // useEffect(()=>{


    // },[])

    if (diaryCreated || diaryEntry[diaryEntry.length -1].date == today){
        return <DiaryForm  diary={diaryEntry[diaryEntry.length -1]} handleUpdate={handleUpdate}/>
    }


    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                date: today
          };
        axios({
          method: "post",
          url: `http://localhost:8080/diaryentry`,
          data
        })
          .then(res => {
            setDiaryCreated(true)
          })
          .catch(err => {
            console.log(err);
          });
    }

    return (
        <>
        <form onSubmit={submitForm} >
            <input type="text" value={today} />
            <button type="submit">Create New Diary Entry</button>
            </form>        
        </>
    )
}

export default StartScreen;