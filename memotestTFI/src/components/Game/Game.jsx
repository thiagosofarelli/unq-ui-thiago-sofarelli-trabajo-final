import {useLocation} from "react-router-dom";
import Board from "../Board/Board.jsx";
import ClubImages  from "../../assets/ClubImages.js";
import {useEffect, useState} from "react";


const Game = () => {
    const location = useLocation();
    const { size } = location.state || { size: '4x4' };
    const clubImagesList = size === '4x4' ? Object.values(ClubImages).slice(0, 8) : size === '6x6' ? Object.values(ClubImages).slice(0, 16) : Object.values(ClubImages);
    const [shuffledClubs, setShuffledClubs] = useState([]);

    useEffect( () => {
        const shuffledClubsList = shuffleArray([...clubImagesList, ...clubImagesList]);
        setShuffledClubs(shuffledClubsList.map( (club, i) => ({ index: i, club}) ));
    }, []);

    const shuffleArray = a => {
        return a
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    return (
        <div className="game-container">
            <h1>Memotest</h1>
            <p>Tamaño del tablero: {size}</p>
            <Board size={size} shuffledClubs={shuffledClubs}/>
        </div>
    );
}

export default Game;