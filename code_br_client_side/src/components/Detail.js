import {useState, useEffect} from 'react';

const Detail = ({diaryEntry}) => {

    // const [loaded, setLoaded] =useState(false);

    // useEffect(()=> {
    //     if (!diaryEntry){
            
    //     }

    // });

    return(
        <>
        <h2>Latest Stats</h2>
            <h3>Date: {diaryEntry[0].date}</h3>
            <h3>Water Intake: {diaryEntry[0].waterIntake.litres} litres</h3>
            <h3>Sleep time: {diaryEntry[0].sleep.hours} hours</h3>
            <h3>Journal Entry: {diaryEntry[0].journal.journal_entry}</h3>
        </>
    )
};

export default Detail;

// const MapFetchData = diaryEntries.map((diaryEntry) => {
  //   return (
  //     // <diaryEntry diaryEntry={diaryEntry} />
  //     <p>{diaryEntry}</p>
  //   )
  // });