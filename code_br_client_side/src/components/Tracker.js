import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import Detail from './Detail';

const Tracker = ({ diaryEntry }) => {

  const data = [
    ["Date", "Litres"],
    [diaryEntry[11].date, diaryEntry[11].waterIntake.litres],
    [diaryEntry[12].date, diaryEntry[12].waterIntake.litres],
    [diaryEntry[13].date, diaryEntry[13].waterIntake.litres],
    [diaryEntry[14].date, diaryEntry[14].waterIntake.litres],
    [diaryEntry[15].date, diaryEntry[15].waterIntake.litres],
    [diaryEntry[16].date, diaryEntry[16].waterIntake.litres],
    [diaryEntry[diaryEntry.length -1].date, diaryEntry[diaryEntry.length -1].waterIntake.litres]
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
    [diaryEntry[11].date, diaryEntry[11].sleep.hours],
    [diaryEntry[12].date, diaryEntry[12].sleep.hours],
    [diaryEntry[13].date, diaryEntry[13].sleep.hours],
    [diaryEntry[14].date, diaryEntry[14].sleep.hours],
    [diaryEntry[15].date, diaryEntry[15].sleep.hours],
    [diaryEntry[16].date, diaryEntry[16].sleep.hours],
    [diaryEntry[diaryEntry.length -1].date, diaryEntry[diaryEntry.length -1].sleep.hours]
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
    [diaryEntry[11].date, diaryEntry[0].screenTime.hours],
    [diaryEntry[12].date, diaryEntry[1].screenTime.hours],
    [diaryEntry[13].date, diaryEntry[2].screenTime.hours],
    [diaryEntry[14].date, diaryEntry[3].screenTime.hours],
    [diaryEntry[15].date, diaryEntry[4].screenTime.hours],
    [diaryEntry[16].date, diaryEntry[5].screenTime.hours],
    [diaryEntry[diaryEntry.length -1].date, diaryEntry[diaryEntry.length -1].screenTime.hours]
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
    [diaryEntry[11].date, diaryEntry[11].meditation.minutes],
    [diaryEntry[12].date, diaryEntry[12].meditation.minutes],
    [diaryEntry[13].date, diaryEntry[13].meditation.minutes],
    [diaryEntry[14].date, diaryEntry[14].meditation.minutes],
    [diaryEntry[15].date, diaryEntry[15].meditation.minutes],
    [diaryEntry[16].date, diaryEntry[16].meditation.minutes],
    [diaryEntry[17].date, diaryEntry[diaryEntry.length -1].meditation.minutes]
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
            data={sleepData}
            options={sleepOptions}
          />
        </div>
        <div 
          className="chart">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={screenTimeData}
            options={screenTimeOptions}
          />
        </div>
        <div 
          className="chart">
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
            data={meditationData}
            options={meditationOptions}
          />
        </div>
      </div>
    </>
  )


};

export default Tracker;