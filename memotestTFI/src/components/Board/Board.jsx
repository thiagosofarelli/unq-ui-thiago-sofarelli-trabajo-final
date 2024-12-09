import React from 'react';
import './Board.css';
import Club from '../Club/Club.jsx';

const Board = ({ size, shuffledClubs, onClubClick }) => {
    const boardClass = `board board-${size}`;

    return (
        <main className={boardClass}>
            {shuffledClubs.map(({ index, club, flipped }) => (
                <Club key={index} club={club} flipped={flipped} onClick={() => onClubClick(index)} />
            ))}
        </main>
    );
};

export default Board;