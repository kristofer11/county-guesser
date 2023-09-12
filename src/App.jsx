import { useState } from 'react'
import { counties } from './assets/counties';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Header />
        <h4 id='countyDisplay'>X marks the spot: select the correct county from the options and start your streak!</h4>
        <GameBoard />
        <Footer />
    </>
  )
}

export default App
