import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Banner from './assets/homepage/banner/Banner'
import Players from './assets/homepage/players/Players';

const fetchPlayers = async() =>{
  const res = await fetch('/data.json');
  return res;
}

function App() {

  const playersPromise = fetchPlayers();
  return (
    <>
      <div>
        <Navbar/> 
        <Banner/>
        <Players playersPromise = {playersPromise}></Players> 
      </div>
    </>
  )
}

export default App
