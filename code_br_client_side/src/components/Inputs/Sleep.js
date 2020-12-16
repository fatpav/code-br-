// import classes from '*.module.css';
import {Slider, Typography} from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const Sleep = () => {

    function valuetext(value) {
        return `${value}`;
    }
    const sliderTheme = createMuiTheme({
        overrides:{
            MuiSlider: {
              thumb:{
              color: "yellow",
              },
              track: {
                color: 'red'
              },
              rail: {
                color: 'black'
              }
            }
        }
    })



    return (
        <>
        <div>
            <p>How long did you sleep last night ?</p>
                <Typography id="discrete-slider" gutterBottom>
                    Sleepytime
                </Typography>
                <ThemeProvider theme={sliderTheme}>
                <Slider
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                    color='#191170'
                />
                </ThemeProvider>
            <form 
                action="" method="post">
                    <button class="navbuttons" type="submit">Submit</button>
            </form>
      </div>
      </>
    )
};

export default Sleep;