import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import Detail from './Detail';

const Tracker = () => {

    const data = [
        ["Date", "Litres"],
        ["12-12-20", 1.5],
        ["13-12-20", 2],
        ["14-12-20", 2.5],
        ["15-12-20", 1.4],
        ["16-12-20", 1.4],
        ["17-12-20", 2.4],
        ["18-12-20", 3.1]
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