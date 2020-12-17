import { useState } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import { MoonOutline } from "heroicons-react";

const Breathing = ({diary, handleUpdate, buttonChange, handleSlide}) => {

    const [breathing, setBreathing] = useState(0)
    const [buttonText, setButtonText] = useState("Add Entry");
    const [disabled, setDisabled] = useState(false)

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
        <div className="slidercenter">
            {/* <p>Breathing</p> */}
                <Typography id="discrete-slider" gutterBottom>
                    How long have you spent doing breathing exercises?
                </Typography>
                <ThemeProvider theme={sliderTheme}>
                <Slider
                    defaultValue={breathing}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={30}
                    onChange={handleChange, handleSlide}
                    color='#191170'
                />
                </ThemeProvider>
            <form 
                onSubmit={submitForm} >
                    <button className="navbuttons" onClick={buttonChange} disabled={disabled} type="submit">{buttonText}</button>
            </form>  
      </div>
        
    )
}

export default Breathing;