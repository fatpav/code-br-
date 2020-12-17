import {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';
import axios from 'axios';


const Screentime = ({diary, handleUpdate}) => {

    const [screenTime, setScreenTime] = useState(0);
    const [buttonText, setButtonText] = useState("Add Entry");
    const [disabled, setDisabled] = useState(false)
   
   
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

   

    const handleChange = (event, value) => {
        setScreenTime(value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                hours: screenTime
          };
        axios({
          method: "post",
          url: `http://localhost:8080/screentime`,
          data
        })
        .then(
            res => {
                handleUpdate("screenTime", res.data)   
                // console.log(diary)        
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


    return(
        <div>
        <p>Screentime </p>
            <Typography id="discrete-slider" gutterBottom>
                How many hours have you spent in front of a screen ?
            </Typography>
            <Slider
                onChange= {handleSlide}
                defaultValue={screenTime}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={0.5}
                marks
                min={0}
                max={12}
            />
            <form 
                onSubmit={submitForm} >
               
            <button onClick={buttonChange} disabled={disabled} type="submit">{buttonText}</button>
            </form>  
        
    </div>
    )
};

export default Screentime;