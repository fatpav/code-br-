// import classes from '*.module.css';
import {Slider, Typography} from '@material-ui/core';

const Sleep = () => {

    function valuetext(value) {
        return `${value}`;
    }



    return (
        <>
        <div>
            <p>How long did you sleep last night ?</p>
                <Typography id="discrete-slider" gutterBottom>
                    Sleepytime
                </Typography>
                <Slider
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                />
            <form 
                action="" method="post">
                    <button type="submit">Submit</button>
            </form>
      </div>
      </>
    )
};

export default Sleep;