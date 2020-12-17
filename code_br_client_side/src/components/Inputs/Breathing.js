import {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';
import axios from 'axios';

const Breathing = ({diary, handleUpdate}) => {

    const [breathing, setBreathing] = useState(0)
   

    const handleChange = (event, value) => {
        setBreathing(value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                minutes: breathing
          };
        axios({
          method: "post",
          url: `http://localhost:8080/breathe`,
          data
        })
        .then(
            res => {
                handleUpdate("breathing", res.data)   
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
            <p>Breathing</p>
                <Typography id="discrete-slider" gutterBottom>
                    How long have you spent doing breathing exercises?
                </Typography>
                <Slider
                    defaultValue={breathing}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={30}
                />
            <form 
                onSubmit={submitForm} >
            <button type="submit">Add Entry</button>
            </form>  
      </div>
        
    )
}

export default Breathing;