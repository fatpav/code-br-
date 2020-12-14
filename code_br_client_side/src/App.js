import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavBar from './components/NavBar';
import StartScreen from './components/StartScreen'
import './App.css';
import Journal from './components/Journal';
import Breathe from './components/Exercises/Breathe';
import Activities from './components/Activities';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Tracker from './components/Tracker';
import Stats from './components/Stats';
import Meditate from './components/Exercises/Meditate';
import Inspire from './components/Exercises/Inspire';
import Yoga from './components/Exercises/Yoga';


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
            <Route path="/meditate" component={Meditate}/>
            <Route path="/yoga" component={Yoga}/>
            <Route path="/inspire" component={Inspire}/>
            <Route path="/breathe" component={Breathe}/>
          </Switch>  
        
        {/* <StartScreen></StartScreen> */}
        </>
      </Router>
  );
}

export default App;
