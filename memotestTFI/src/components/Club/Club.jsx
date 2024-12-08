import React, {useState} from 'react';
import './Club.css';

const Club = ({ club }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="club">
            <img src={club} alt="Club Image" className="club-image" />
        </div>
    );
};

export default Club;