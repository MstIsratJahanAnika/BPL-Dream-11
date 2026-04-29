// import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Card = ({players}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map(player => {

                        const { playerName, playerCountry, playerType, rating, battingStyle, bowlingStyle, price, playerImg } = player;

                        console.log(player, 'player'); //individual player pabo 
                        return <div className="card bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src={playerImg}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title"><FaUser />{playerName}</h2>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <IoFlagSharp />
                                        <p>{playerCountry}</p>
                                    </div>
                                    <button className="btn">{playerType}</button>
                                </div>

                                {/* divider */}
                                <div className="divider"></div>

                                <h2 className="font-bold">Rating: {rating}</h2>

                                <div className="flex gap-17 items-center font-semibold">
                                    <p>{battingStyle}</p>
                                    <p>{bowlingStyle}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">Price: ${price}</p>
                                    <button className="btn">Choose Player</button>
                                </div>
                            </div>
                        </div>;
                    })
                 }
            </div>
        </div>
    );
};

export default Card;