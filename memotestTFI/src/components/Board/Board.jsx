import React from 'react';
import './Board.css';
import Club from '../Club/Club.jsx';

const Board = ({ size, shuffledClubs }) => {
    const getGridTemplate = (size) => {
        const [rows, cols] = size.split('x').map(Number);
        return {
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
        };
    };

    return (
        <main className="board" style={getGridTemplate(size)}>
            {shuffledClubs.map(({ index, club }) => (
                <Club key={index} club={club}  />
            ))}
        </main>
    );
};

export default Board;