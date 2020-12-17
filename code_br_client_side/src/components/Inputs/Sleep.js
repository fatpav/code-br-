
import { useState } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import { MoonOutline } from "heroicons-react";

const Sleep = ({ diary, handleUpdate }) => {

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



    const [sleep, setSleep] = useState(0)


    const handleChange = (event, value) => {
        setSleep(value);
    };


    const submitForm = (event) => {
        event.preventDefault();
        const data = {
            hours: sleep
        };
        axios({
            method: "post",
            url: `http://localhost:8080/sleep`,
            data
        })
            .then(
                res => {
                    handleUpdate("sleep", res.data)
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
        <>
            <div className="slidercenter">
                <p>How many hours sleep did you get?</p>
                <Typography id="discrete-slider" gutterBottom>
                    <MoonOutline />
                </Typography>
                <ThemeProvider theme={sliderTheme}>
                    <Slider
                        defaultValue={sleep}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={10}
                        onChange={handleChange}
                        color='#191170'
                    />
                </ThemeProvider>
                <form onSubmit={submitForm} >
                    <button class="navbuttons" type="submit">Submit Sleep</button>
                </form>
            </div>
        </>
    );
};

export default Sleep;