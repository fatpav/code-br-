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



  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setOnWelcome(false)
    }, 5000)
    getData();
  }, [selectedDiaryEntry])


  return (
    <Router>
      <>
        <h1 class="heading">code&lt;br&gt;</h1>

        <Switch>
          <Route exact path="/" component={StartScreen} />
          {/* <RefreshRoute exact path="/" component={StartScreen} /> */}
          <Route path="/journal" component={Journal} />
          <Route path="/activities" component={Activities} />
          {/* <Route path="/mystats" component={Stats}/> */}
          <Route path="/meditate" component={Meditate} />
          <Route path="/yoga" component={Yoga} />
          <Route path="/inspire" component={Inspire} />
          <Route path="/breathe" component={Breathe} />
          <Route path="/mood" component={Mood} />
          <Route path="/sleep" component={Sleep} />
          <Route path="/detail" render={(props) => <Detail {...props} diaryEntry={diaryEntry} />} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/waterintake" component={WaterIntake} />
          <Route path="/screentime" component={Screentime} />
        </Switch>
        <NavBar />
      </>
    </Router>
  );

  //     return (
  //         <>
  //             <h2>Home</h2>

  //             <Link to= "/sleep">
  //                 <button>Sleep</button>
  //             </Link>

  //             <Link to= "/mood">
  //                 <button>Mood</button>
  //             </Link>

  //             <Link to="/waterintake">
  //                 <button>Water Intake</button>
  //             </Link>

  //             <Link to= "/screentime">
  //                 <button>Screentime</button>
  //             </Link>


  //             <Link to= "/detail">
  //                 <button>Detail</button>
  //             </Link>


  //             <Link to= "/tracker">
  //                 <button>Tracker</button>
  //             </Link>
  //         </>
  //     )
}

export default Home;