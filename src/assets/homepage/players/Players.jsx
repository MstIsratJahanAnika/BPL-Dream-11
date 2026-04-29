// import React from 'react';

import { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(players);

    const [selectedType, setSelectedType] = useState(true)
    console.log(selectedType, 'selectedType');
    return (
        <div className="container mx-auto my-10">
            {/* Players: {players.length} */}
            <div className="flex justify-between items-center my-10">
                <h2 className="font-bold text-[28px]"> {selectedType ? "Available Players" : "Selected Players (0/6)"}</h2>

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
                        Selected (0)
                    </button>
                </div>
            </div>

            {/* eta conditional hobe */}
            {/* <AvailablePlayers players={players} /> */}

            {selectedType ? <AvailablePlayers players={players} /> : <SelectedPlayers />}
        </div>
    );
};

export default Players;