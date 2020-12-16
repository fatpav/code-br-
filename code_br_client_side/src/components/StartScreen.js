import {Link} from 'react-router-dom'
import Loading from './Loading';
import DiaryForm from '../components/Inputs/DiaryForm';
import axios from 'axios';


const StartScreen = ({diaryEntry}) =>{

    const dateObj = new Date();
    const month = dateObj.getMonth()+1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear().toString().slice(-2);
    const today = `${day}/${month}/${year}`
    
    let componentToRender 

    // if (diaryEntry.length && diaryEntry[diaryEntry.length -1].date !== today){
        
    //     componentToRender = <DiaryForm />
    // } else {
    //     componentToRender = <h1>Home Page</h1>
    // }

  





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
            console.log("Yeet") 
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