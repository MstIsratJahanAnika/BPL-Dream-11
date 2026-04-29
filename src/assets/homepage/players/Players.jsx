//all players jekhabe thakbe 

// import React from 'react';

import { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoins, coins }) => {
    // console.log(playersPromise);

    const players = use(playersPromise);
    // console.log(players);

    const [selectedType, setSelectedType] = useState(true)
    // console.log(selectedType, 'selectedType');

    // selected payers ekhan theke handle hobe, all players theke e players selected hobe
    // all selected players ekta arry
    const[selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className="container mx-auto my-10">
            {/* Players: {players.length} */}
            <div className="flex justify-between items-center my-10">
                <h2 className="font-bold text-[28px]"> {selectedType ? "Available Players" : `Selected Players (${selectedPlayers.length}/${players.length})`}</h2>

                {/* button toggling */}
                <div>
                    <button
                        onClick={() => setSelectedType(true)}
                        className={`btn ${selectedType ? "bg-[#E7FE29]" : "bg-white"} rounded-r-none rounded-l-xl`}>
                        Available
                    </button>

                    <button
                        onClick={() => setSelectedType(false)}
                        className={`btn ${!selectedType ? "bg-[#E7FE29]" : "bg-white"} rounded-l-none rounded-r-xl`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {/* eta conditional hobe */}
            {/* <AvailablePlayers players={players} /> */}

            {selectedType ? 
            <AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} 
                coins={coins} setCoins={setCoins} players={players} /> : 
            <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins}/>}
        </div>
    );
};

export default Players;