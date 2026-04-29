//main parent 
import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Banner from './assets/homepage/banner/Banner'
import Players from './assets/homepage/players/Players';

const fetchPlayers = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const[coins, setCoins] = useState(1000000);

  const playersPromise = fetchPlayers();
  return (
    <>
      <div>
        <Navbar coins={coins}/> 
        <Banner/>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Players coins={coins} setCoins={setCoins} playersPromise = {playersPromise}></Players> 
        </Suspense>
      </div>
    </>
  )
}

export default App
