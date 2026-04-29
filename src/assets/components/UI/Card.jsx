// import React from 'react';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Card = ({ player }) => {

    const { 
        playerImg, 
        playerName, 
        playerCountry, 
        playerType, 
        rating, 
        battingStyle, 
        bowlingStyle, 
        price 
    } = player;

    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img src={playerImg} alt={playerName} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    <FaUser /> {playerName}
                </h2>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <IoFlagSharp />
                        <p>{playerCountry}</p>
                    </div>
                    <button className="btn">{playerType}</button>
                </div>

                <div className="divider"></div>

                <h2 className="font-bold">Rating: {rating}</h2>

                <div className="flex gap-10 items-center font-semibold">
                    <p>{battingStyle}</p>
                    <p>{bowlingStyle}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="font-semibold">Price: ${price}</p>

                    <button 
                        className="btn" 
                        onClick={() => setIsSelected(!isSelected)}
                    >
                        {isSelected ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;