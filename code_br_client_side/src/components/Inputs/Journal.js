import {useState} from 'react';
import axios from 'axios';

const Journal = ({diary, handleUpdate}) => {

    const [journal, setJournal] = useState("")
    const [buttonText, setButtonText] = useState("Add Entry");
    const [disabled, setDisabled] = useState(false);

    function buttonChange() {
        if(disabled === false){
           setButtonText("Submitted")
           setDisabled(true)
        }
   };
   

    const handleChange = (event) => {
        setJournal(event.target.value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                journal_entry: journal
          };
        axios({
          method: "post",
          url: `http://localhost:8080/journal`,
          data
        })
        .then(
            res => {
                handleUpdate("journal", res.data)   
                // console.log(diaryEntry)        
                axios.put(`http://localhost:8080/diaryentry/${diary.id}`, diary,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                      },
                    })
            .then(
                res => console.log("PLEASE!")
            )
            }
        )
            .catch(err => {
                console.log(err);
            });
        };

    
    return (
        <>
            <h2>Journal</h2>
            <h2>Remind yourself about the day</h2>
            <div class="journalform">
                <input onChange={handleChange} type="text" id="inputbox" placeholder="How did you feel today?" />
            </div>
            <div class="navbar">
                {/* IF DIARYENTRY.JOURNAL ? EDIT : ADD */}
                
                <form
                    onSubmit={submitForm} >
                <button class="navbuttons" type="submit" onClick={buttonChange}>{buttonText}</button>
                </form> 
            </div>
            <div class="navbar">
            <a href="/detail" class="navbuttons">See your day's stats.</a>
            </div>
        </>
    )
};

export default Journal;