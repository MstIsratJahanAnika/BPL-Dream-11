//jeshob players ami choose korte parbo, players er moddhe eta
// import React from 'react';

import Card from "../../../components/UI/Card";

const AvailablePlayers = ({ players, setCoins, coins }) => {
    console.log(players, 'players');

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map(player => {
                        console.log(player, 'player'); //individual player pabo 
                        return(
                            <Card coins={coins} setCoins={setCoins} player={player}></Card>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default AvailablePlayers;