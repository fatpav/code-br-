import NavBar from './components/NavBar';
import StartScreen from './components/StartScreen'
import './App.css';
import Journal from './components/Journal';
import Breathing from './Breathing';
import Activities from './components/Activities';
import Mood from './components/Mood';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <StartScreen></StartScreen>
      <Journal></Journal>
      <Breathing></Breathing>
      <Activities></Activities>
      <Mood></Mood>
     
    </div>
  );
}

export default App;
