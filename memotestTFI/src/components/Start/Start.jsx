import {useNavigate} from "react-router-dom";
import {useState} from "react";
import './Start.css';

const Start = () => {
    const navigate = useNavigate();
    const [gameSize, setGameSize] = useState('4x4');

    const handleStartGame = () => {
        navigate('/game', { state: { size: gameSize } });
    };

    return (
        <div className="start-container">
            <h1>Memotest</h1>
            <h2>¡Encuentra todas las parejas de fichas!</h2>
            <div className="memo-select-start">
            <label htmlFor="gameSize">Tamaño del tablero:</label>
            <select className="memo-select-gameSize" value={gameSize} onChange={(e) => setGameSize(e.target.value)}>
                <option value="4x4">4x4</option>
                <option value="6x6">6x6</option>
                <option value="8x8">8x8</option>
            </select>
            <button onClick={handleStartGame}>Empezar</button>
            </div>
        </div>
    )
}

export default Start;