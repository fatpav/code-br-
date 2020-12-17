import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, RefreshRoute } from "react-router-dom";
import NavBar from '../components/NavBar';
import StartScreen from '../components/StartScreen'

import Journal from '../components/Inputs/Journal';
import Breathe from '../components/Exercises/Breathe';
import Activities from '../components/Activities';
import Mood from '../components/Inputs/Mood';
import Sleep from '../components/Inputs/Sleep';
import Tracker from '../components/Tracker';
import Meditate from '../components/Exercises/Meditate';
import Inspire from '../components/Inspire';
import Yoga from '../components/Exercises/Yoga';
import Detail from '../components/Detail'
import WaterIntake from '../components/Inputs/WaterIntake';
import Screentime from '../components/Inputs/Screentime';
import Loading from '../components/Loading';
import DiaryForm from "../components/Inputs/DiaryForm";


const Home = () => {


  const [onWelcome, setOnWelcome] = useState(true);
  const [diaryEntry, setDiaryEntry] = useState({});
  const [selectedDiaryEntry, setselectedDiaryEntry] = useState(0)
  // const [loaded, setLoaded] = useState(false)
  const getData = () => {
    fetch("http://localhost:8080/diaryentry")
      .then(response => response.json())
      .then(results => setDiaryEntry(results))
    // .then(() => setLoaded(true))
    // console.log(diaryEntries);
  };

const handleUpdate = (property, value) => {
  const newDiaryEntry = [...diaryEntry]
  newDiaryEntry[newDiaryEntry.length -1][property]=value
  setDiaryEntry(newDiaryEntry)
  console.log("updated")
}


  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setOnWelcome(false)
    }, 2000)
    getData();
  }, [selectedDiaryEntry])


  if(onWelcome){
    return <Loading />
  };

  return (
    <Router>
      <>
        <h1 class="heading">code&lt;br&gt;</h1>

        <Switch>
         
              <Route exact path="/" render={(props)=> <StartScreen {...props} diaryEntry={diaryEntry} handleUpdate={handleUpdate}/>}/>
              <Route path="/new" component={DiaryForm}/>
              <Route path="/journal" render={(props)=> <Journal {...props} diary={diaryEntry[diaryEntry.length -1]} handleUpdate={handleUpdate}/>}/>
              {/* component={Journal} diaryEntry={diaryEntry} handleUpdate={handleUpdate} */}
              <Route path="/activities" component={Activities}/>
              {/* <Route path="/mystats" component={Stats}/> */}
              <Route path="/meditate" component={Meditate}/>
              <Route path="/yoga" component={Yoga}/>
              <Route path="/inspire" component={Inspire}/>
              <Route path="/breathe" component={Breathe}/>
              <Route path="/mood" component={Mood}/>
              <Route path="/sleep" component={Sleep}/>
              <Route path="/detail"  render={(props)=> <Detail {...props} diaryEntry={diaryEntry}/>}/>
              <Route path="/tracker" render={(props)=> <Tracker {...props} diaryEntry={diaryEntry}/>}/>
              <Route path="/waterintake" component={WaterIntake}/>
              <Route path="/screentime" component={Screentime}/>
              
            </Switch>  
          <NavBar />
        </>
      </Router>
  );
}

export default Home;