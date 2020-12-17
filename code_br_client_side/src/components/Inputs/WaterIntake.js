import { useState } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import { MoonOutline } from "heroicons-react";

const WaterIntake = ({diary, handleUpdate}) => {

    const [waterIntake, setWaterIntake] = useState(0);
    const [buttonText, setButtonText] = useState("Add Entry");
    const [disabled, setDisabled] = useState(false);

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

    const sliderTheme = createMuiTheme({
        overrides: {
            MuiSlider: {
                thumb: {
                    color: '#191170',
                },
                track: {
                    color: 'white'
                },
                rail: {
                    color: '#191170'
                },
                root: {
                    width: 280,
                },
            }
        }
    })

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
        <div className="slidercenter">
            {/* <p>Water Intake </p> */}
                <Typography id="discrete-slider" gutterBottom>
                    How much water have you drank? (Litres)
                </Typography>
                <ThemeProvider theme={sliderTheme}>
                <Slider
                    defaultValue={waterIntake}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.25}
                    marks
                    min={0}
                    max={5}
                    onChange={handleChange, handleSlide}
                    color='#191170'
                />
                </ThemeProvider>
                <form 
                onSubmit={submitForm} >
                    <button className="navbuttons" onClick={buttonChange} type="submit">{buttonText}</button>
            </form>  
      </div>
        
    )
}

export default WaterIntake;