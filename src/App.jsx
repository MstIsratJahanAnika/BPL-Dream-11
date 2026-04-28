import { Suspense } from 'react';
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Banner from './assets/homepage/banner/Banner'
import Players from './assets/homepage/players/Players';

const fetchPlayers = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playersPromise = fetchPlayers();
  return (
    <>
      <div>
        <Navbar/> 
        <Banner/>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Players playersPromise = {playersPromise}></Players> 
        </Suspense>
      </div>
    </>
  )
}

export default App
