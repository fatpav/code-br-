import {Slider, Typography} from '@material-ui/core';

const Screentime = () => {

    function valuetext(value) {
        return `${value}`;
    }

    return(
        <div>
        <p>Stop staring at a screen, Nerd ! </p>
            <Typography id="discrete-slider" gutterBottom>
                ScreenTime ?
            </Typography>
            <Slider
                defaultValue={5}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={0.5}
                marks
                min={0}
                max={12}
            />
        <form 
            action="" method="post">
                <button type="submit">Submit</button>
        </form>
    </div>
    )
};

export default Screentime;