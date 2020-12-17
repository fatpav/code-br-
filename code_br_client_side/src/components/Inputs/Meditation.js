import {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';
import axios from 'axios';

const Meditation = ({diary, handleUpdate}) => {

    const [meditation, setMeditation] = useState(0)
   

    const handleChange = (event, value) => {
        setMeditation(value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                minutes: meditation
          };
        axios({
          method: "post",
          url: `http://localhost:8080/meditate`,
          data
        })
        .then(
            res => {
                handleUpdate("meditation", res.data)   
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



    return (
        <div>
            <p>Meditation</p>
                <Typography id="discrete-slider" gutterBottom>
                    How long have you practiced?
                </Typography>
                <Slider
                    defaultValue={meditation}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={60}
                />
            <form 
                onSubmit={submitForm} >
            <button type="submit">Add Entry</button>
            </form>  
      </div>
        
    )
}

export default Meditation;