// import React from 'react';

import Card from "../../../components/UI/Card";

const AvailablePlayers = ({ players }) => {
    console.log(players, 'players');

    return (
        <div>
            <Card players={players}></Card>
        </div>
    );
};

export default AvailablePlayers;