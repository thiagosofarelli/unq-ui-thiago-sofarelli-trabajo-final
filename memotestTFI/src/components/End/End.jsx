import {useNavigate} from "react-router-dom";

const Game = () => {
    const navigate = useNavigate();

    return (
        <div className="end-container">
            <h1>¡Juego finalizado!</h1>
            <button onClick={() => navigate('/')}>Empezar de nuevo</button>
        </div>
    );
}

export default Game;