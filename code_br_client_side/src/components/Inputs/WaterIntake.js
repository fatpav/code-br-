import {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';
import axios from 'axios';

const WaterIntake = ({diary, handleUpdate}) => {

    const [waterIntake, setWaterIntake] = useState(0)
   

    const handleChange = (event, value) => {
        setWaterIntake(value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                hours: waterIntake
          };
        axios({
          method: "post",
          url: `http://localhost:8080/waterintake`,
          data
        })
        .then(
            res => {
                handleUpdate("waterIntake", res.data)   
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
            <p>Is your pee clear ??? </p>
                <Typography id="discrete-slider" gutterBottom>
                    WATER ?
                </Typography>
                <Slider
                    defaultValue={waterIntake}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.25}
                    marks
                    min={0}
                    max={5}
                />
            <form 
                onSubmit={submitForm} >
            <button type="submit">Submit Sleep</button>
            </form>  
      </div>
        
    )
}

export default WaterIntake;