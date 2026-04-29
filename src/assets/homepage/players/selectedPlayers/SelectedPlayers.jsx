// import React from 'react';

// import { FaUser } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";
import SelectedCard from "../../../components/UI/SelectedCard";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    console.log(selectedPlayers, 'selectedPlayers');

    // delete button kaj korar function
    const handleDeleteSelectedPlayer = (selectedPlayer) => {
        console.log(selectedPlayer, 'all selected players');

        // filter out not deleted players
        const filterPlayers = selectedPlayers.filter(deletePlayer => deletePlayer.playerName !== selectedPlayer.playerName)
        console.log(filterPlayers, 'filterPlayers');

        // state update hobe filterPlayers diye
        setSelectedPlayers(filterPlayers);

        // delete hocche tai coins barbe
        setCoins(coins + selectedPlayer.price);
    }
    return (
        <div>
            <div className="space-y-5">
                {
                    //jodi selectedPlayers length 0 thake, then
                    selectedPlayers.length === 0 ?
                        <div>
                            <h2 className="font-semibold text-xl">No Players Selected Yet</h2>
                            <p>Go to Available Tab to Select Players</p>
                        </div>
                        : selectedPlayers.map((selectedPlayer, ind) => {

                            // ekhan theke must return korte hobe
                            return (

                                // select korar por je part show korbe 
                                <SelectedCard key={ind}
                                    handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                                    selectedPlayer={selectedPlayer}></SelectedCard>
                            )
                        })
                }
            </div>
        </div >
    );
};

export default SelectedPlayers;