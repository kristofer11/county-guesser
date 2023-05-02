import { useState } from 'react'
import { counties } from './assets/counties';
import './App.css';
import Header from './components/Header';
import Options from './components/Options';

function App() {
    const [currentCounty, setCurrentCounty] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);

//Add 'handleClick' function for user selection

//Add 'handleNextCounty' function for 'next' button
  return (
    <>
    <Header />
        <h4>X marks the spot: select the correct county from the options and start your streak!</h4>
        <h5>Current Streak: {currentStreak}</h5>
        <img src={counties[0].img} width='400px' />
        <Options />
    </>
  )
}

export default App
