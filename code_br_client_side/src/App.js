import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavBar from './components/NavBar';
import StartScreen from './components/StartScreen'
import './App.css';
import Journal from './components/Journal';
import Breathing from './Breathing';
import Activities from './components/Activities';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Tracker from './components/Tracker';
import Stats from './components/Stats';


function App() {
  return (
      <Router>
        <>
        <NavBar />
          <Switch>
            <Route exact path="/" component={StartScreen} />
            <Route path="/journal" component={Journal}/>
            <Route path="/activities" component={Activities}/>
            <Route path="/mystats" component={Stats}/>
          </Switch>  
        
        {/* <StartScreen></StartScreen> */}
      {/* <Journal></Journal>  this works but doesn't go here */}
      {/* <Breathing></Breathing> this works but doesn't go here*/}
      {/* <Activities></Activities> this works but doesn't go here */}
      {/* <Mood></Mood> this works but doesn't go here */}
      {/* <Sleep></Sleep> this works but doesn't go here */}
      {/* <Tracker></Tracker> this works but doesn't go here*/}
      {/* <Stats></Stats> this works but doesn't go here */}
        </>
      </Router>
  );
}

export default App;
