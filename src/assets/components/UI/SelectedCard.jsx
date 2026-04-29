// import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const SelectedCard = ({selectedPlayer, handleDeleteSelectedPlayer}) => {

    //selectedPlayers tab a ei part tuku dekhabe
    // selected player er properties destructuring
    const { playerImg, playerName, playerType } = selectedPlayer;
    return (
        // return a pura html likha 

        // key outmost element a dite hobe
            <div className="flex items-center justify-between p-10 rounded-2xl border">
                <div className="flex items-center gap-3">
                    <img src={playerImg} alt={playerName} className="rounded-2xl h-20  w-auto" />
                    <div>
                        <h2 className="font-semibold text-xl flex items-center gap-2">< FaUser />{playerName}</h2>
                        <p>{playerType}</p>
                    </div>
                </div>

                {/* delete button */}
                <button className="btn btn-ghost text-red-500 w-10 h-10 p-0 rounded-full"
                    onClick={() => handleDeleteSelectedPlayer(selectedPlayer)}>
                    <RiDeleteBin5Line />
                </button>
            </div>
    );
};

export default SelectedCard;