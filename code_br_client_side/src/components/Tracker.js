import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import Detail from './Detail';

const Tracker = ({ diaryEntry }) => {

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
    [diaryEntry[0].date, diaryEntry[0].sleep.hours],
    [diaryEntry[1].date, diaryEntry[1].sleep.hours],
    [diaryEntry[2].date, diaryEntry[2].sleep.hours],
    [diaryEntry[3].date, diaryEntry[3].sleep.hours],
    [diaryEntry[4].date, diaryEntry[4].sleep.hours],
    [diaryEntry[5].date, diaryEntry[5].sleep.hours],
    [diaryEntry[6].date, diaryEntry[6].sleep.hours]
  ];


  const sleepOptions = {
    title: "Hours slept",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#ad5100' }
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
    [diaryEntry[0].date, diaryEntry[0].screenTime.hours],
    [diaryEntry[1].date, diaryEntry[1].screenTime.hours],
    [diaryEntry[2].date, diaryEntry[2].screenTime.hours],
    [diaryEntry[3].date, diaryEntry[3].screenTime.hours],
    [diaryEntry[4].date, diaryEntry[4].screenTime.hours],
    [diaryEntry[5].date, diaryEntry[5].screenTime.hours],
    [diaryEntry[6].date, diaryEntry[6].screenTime.hours]
  ];


  const screenTimeOptions = {
    title: "Screen Time",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#ad0000' }
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
    [diaryEntry[0].date, diaryEntry[0].meditation.minutes],
    [diaryEntry[1].date, diaryEntry[1].meditation.minutes],
    [diaryEntry[2].date, diaryEntry[2].meditation.minutes],
    [diaryEntry[3].date, diaryEntry[3].meditation.minutes],
    [diaryEntry[4].date, diaryEntry[4].meditation.minutes],
    [diaryEntry[5].date, diaryEntry[5].meditation.minutes],
    [diaryEntry[6].date, diaryEntry[6].meditation.minutes]
  ];

  const meditationOptions = {
    title: "Meditation Time",
    curveType: "function",
    legend: { position: "bottom" },
    lineWidth: 5,
    series: {
      0: { color: '#8d00ad' }
    },
    backgroundColor: 'transparent',
    fontName: 'Quicksand',
    textStyle: {
      color: '#F191170',
      fontName: 'Quicksand',
      fontSize: '10'
    }
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