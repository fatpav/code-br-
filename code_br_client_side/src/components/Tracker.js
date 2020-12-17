import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const Tracker = ({ diaryEntry }) => {

  const [index, setIndex] = useState(0);
  

  const data = [
    ["Date", "Litres"],
    [diaryEntry[index].date, diaryEntry[index].waterIntake.litres],
    [diaryEntry[index +1].date, diaryEntry[index +1].waterIntake.litres],
    [diaryEntry[index +2].date, diaryEntry[index +2].waterIntake.litres],
    [diaryEntry[index +3].date, diaryEntry[index +3].waterIntake.litres],
    [diaryEntry[index +4].date, diaryEntry[index +4].waterIntake.litres],
    [diaryEntry[index +5].date, diaryEntry[index +5].waterIntake.litres],
    [diaryEntry[index +6].date, diaryEntry[index +6].waterIntake.litres]
  ];


  const options = {
    title: "Water Intake",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#191170' }
    },
    backgroundColor: 'transparent',
    fontName: 'Quicksand',
    textStyle: {
      color: '#F191170',
      fontName: 'Quicksand',
      fontSize: '10'
    }

  };

  const sleepData = [
    ["Date", "Hours"],
    [diaryEntry[index].date, diaryEntry[index].sleep.hours],
    [diaryEntry[index +1].date, diaryEntry[index +1].sleep.hours],
    [diaryEntry[index +2].date, diaryEntry[index +2].sleep.hours],
    [diaryEntry[index +3].date, diaryEntry[index +3].sleep.hours],
    [diaryEntry[index +4].date, diaryEntry[index +4].sleep.hours],
    [diaryEntry[index +5].date, diaryEntry[index +5].sleep.hours],
    [diaryEntry[index +6].date, diaryEntry[index +6].sleep.hours]
  ];


  const sleepOptions = {
    title: "Hours slept",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#191170' }
    },
    backgroundColor: 'transparent',
    fontName: 'Quicksand',
    textStyle: {
      color: '#F191170',
      fontName: 'Quicksand',
      fontSize: '10'
    }

  };

  const screenTimeData = [
    ["Date", "Hours"],
    [diaryEntry[index].date, diaryEntry[index].screenTime.hours],
    [diaryEntry[index +1].date, diaryEntry[index +1].screenTime.hours],
    [diaryEntry[index +2].date, diaryEntry[index +2].screenTime.hours],
    [diaryEntry[index +3].date, diaryEntry[index +3].screenTime.hours],
    [diaryEntry[index +4].date, diaryEntry[index +4].screenTime.hours],
    [diaryEntry[index +5].date, diaryEntry[index +5].screenTime.hours],
    [diaryEntry[index +6].date, diaryEntry[index +6].screenTime.hours]
  ];


  const screenTimeOptions = {
    title: "Screen Time",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#191170' }
    },
    backgroundColor: 'transparent',
    fontName: 'Quicksand',
    textStyle: {
      color: '#F191170',
      fontName: 'Quicksand',
      fontSize: '10'
    }

  };
  
  const meditationData = [
    ["Date", "Minutes"],
    [diaryEntry[index].date, diaryEntry[index].meditation.minutes],
    [diaryEntry[index +1].date, diaryEntry[index +1].meditation.minutes],
    [diaryEntry[index +2].date, diaryEntry[index +2].meditation.minutes],
    [diaryEntry[index +3].date, diaryEntry[index +3].meditation.minutes],
    [diaryEntry[index +4].date, diaryEntry[index +4].meditation.minutes],
    [diaryEntry[index +5].date, diaryEntry[index +5].meditation.minutes],
    [diaryEntry[index +6].date, diaryEntry[index +6].meditation.minutes]
  ];
  }
  return (
    <>
      <h2>Tracker</h2>
      <div class="chartholder" >
        <div className="chart">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={data}
            options={options}
          />
        </div>
        <div className="chart">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={sleepData}
            options={sleepOptions}
          />
        </div>
        <div className="chart">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={screenTimeData}
            options={screenTimeOptions}
          />
        </div>
        <div className="chart">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={meditationData}
            options={meditationOptions}
          />
        </div>
      </div>
    </>
  )


};

export default Tracker;