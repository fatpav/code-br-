import { useState } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import { MoonOutline } from "heroicons-react";

const Screentime = ({diary, handleUpdate}) => {

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

    const [screenTime, setScreenTime] = useState(0)
   

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
        <div className="slidercenter">
        <p>Screentime </p>
            <Typography id="discrete-slider" gutterBottom>
                How many hours have you spent in front of a screen ?
            </Typography>
            <ThemeProvider theme={sliderTheme}>
            <Slider
                defaultValue={screenTime}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={0.5}
                marks
                min={0}
                max={12}   
                color='#191170'
                />
            </ThemeProvider>
            />
            <form 
                onSubmit={submitForm} >
            <button className="navbuttons" type="submit">Add Entry</button>
            </form>  
        
    </div>
    )
};

export default Screentime;