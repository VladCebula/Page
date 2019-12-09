import React from 'react';
import Game from "./Game";
export default function Projects() {
    return(
    <div>
        <h2 id="Projects" >Projects</h2>
        <div className="Projects">
        <Game className="TicTac"/>
        <Game className="TicTac"/>
        <Game className="TicTac"/>
        <Game className="TicTac"/>
        <Game className="TicTac"/>
        </div>
    </div>
    );
}