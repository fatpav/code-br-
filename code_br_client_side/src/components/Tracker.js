import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const Tracker = ({diaryEntry}) => {

    const data = [
        ["Date", "Litres"],
        [diaryEntry[0].date, diaryEntry[0].waterIntake.litres],
        [diaryEntry[1].date, diaryEntry[1].waterIntake.litres],
        [diaryEntry[2].date, diaryEntry[2].waterIntake.litres],
        [diaryEntry[3].date, diaryEntry[3].waterIntake.litres],
        [diaryEntry[4].date, diaryEntry[4].waterIntake.litres],
        [diaryEntry[5].date, diaryEntry[5].waterIntake.litres],
        [diaryEntry[6].date, diaryEntry[6].waterIntake.litres]
      ];
    

    const options = {
        title: "Water Intake",
        curveType: "function",
        legend: { position: "bottom" },
        lineWidth: 5,
        series: {
            0: {color: '#191170' }
        },
        backgroundColor: 'transparent',
        fontName: 'Quicksand',
        textStyle: { color: '#F191170', 
                   fontName: 'Quicksand', 
                   fontSize: '10' }

      };
    
    return (
        <>
        <h2>Tracker</h2>
      <div className="chart">
        <Chart
          chartType="LineChart"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      </div>
      </>
    )
  
    
    };

export default Tracker;