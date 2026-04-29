//jeshob players ami choose korte parbo, players er moddhe eta
// import React from 'react';

import Card from "../../../components/UI/Card";

const AvailablePlayers = ({ players, setCoins, coins, selectedPlayers, setSelectedPlayers }) => {
    // console.log(players, 'players');

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map((player, index) => {
                        // console.log(player, 'player'); //individual player pabo 
                        return(
                            // setSelectedPlayers er state handling card er moddhe e hobe 
                            <Card key={index} coins={coins} setCoins={setCoins} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default AvailablePlayers;