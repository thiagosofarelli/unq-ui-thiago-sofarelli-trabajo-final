import {useNavigate} from "react-router-dom";
import {useState} from "react";
import './Start.css';

const Start = () => {
    const navigate = useNavigate();
    const [gameSize, setGameSize] = useState('4x4');
    const [gameMode, setGameMode] = useState('1');

    const handleStartGame = () => {
        navigate('/game', { state: { size: gameSize, mode: gameMode } });
    };

    return (
        <div className="start-container">
            <h1>Memotest</h1>
            <h2>¡Encuentra todas las parejas de Clubes de Fútbol!</h2>
            <div className="memo-select-start">
                <label className={"sizeLabel"} htmlFor="gameSize"><h3>Tamaño del tablero:</h3></label>
                <select className="memo-select-gameSize" value={gameSize} onChange={(e) => setGameSize(e.target.value)}>
                    <option value="4x4">4x4</option>
                    <option value="6x6">6x6</option>
                    <option value="8x8">8x8</option>
                </select>
                <label className={"modeLabel"} htmlFor="gameMode"><h3>Modo de juego:</h3></label>
                <select className="memo-select-gameMode" value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
                    <option value="1">1 Jugador</option>
                    <option value="2">2 Jugadores</option>
                </select>
                <button onClick={handleStartGame}>Empezar</button>
            </div>
        </div>
    )
}

export default Start;