import {useLocation} from "react-router-dom";
import Board from "../Board/Board.jsx";

const Game = () => {
    const location = useLocation();
    const { size } = location.state || { size: '4x4' };

    return (
        <div className="game-container">
            <h1>Memotest</h1>
            <p>Tamaño del tablero: {size}</p>
            <Board size={size}/>
        </div>
    );
}

export default Game;