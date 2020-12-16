import {Slider, Typography} from '@material-ui/core';

const WaterIntake = () => {

    function valuetext(value) {
        return `${value}`;
    }



    return (
        <div>
            <p>Have you been drinking enough water ? Add your recent </p>
                <Typography id="discrete-slider" gutterBottom>
                    WATER ?
                </Typography>
                <Slider
                    defaultValue={1.5}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.25}
                    marks
                    min={0}
                    max={5}
                />
            <form 
                action="" method="post">
                    <button type="submit">Submit</button>
            </form>
      </div>
        
    )
}

export default WaterIntake;