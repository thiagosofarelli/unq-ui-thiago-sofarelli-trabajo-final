import React from 'react';
import './Club.css';

const Club = ({ club, flipped, onClick }) => {
    return (
        <div className={`club ${flipped ? '' : 'flipped'}`} onClick={onClick}>
            <img src={club} alt="Club Image" className="club-image" />
        </div>
    );
};

export default Club;