import React from 'react';

function Player(props) {
    return (
        <div className="player" key={props.players.id}>
            <h2>Name: {props.players.name}</h2>
            <h3>Country: {props.players.country}</h3>
            <p>Searches: {props.players.searches}</p>
        </div>
    )
}

export default Player;
