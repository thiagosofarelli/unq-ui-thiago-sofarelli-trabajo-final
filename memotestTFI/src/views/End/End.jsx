import { useLocation, useNavigate } from "react-router-dom";
import './End.css';

const End = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { score, scorePlayer2, mode } = location.state || { score: 0, scorePlayer2 : 0, mode : undefined };

    return (
        <div className="end-container">

            {mode === "2" ? (
                <>
                    <h1>¡Juego finalizado!</h1>
                    <h3>Puntaje Jugador 1: {score}</h3>
                    <h3>Puntaje Jugador 2: {scorePlayer2}</h3>
                </>
            ) : mode === "1" ? (
                <>
                    <h1>¡Juego finalizado!</h1>
                    <h3>Obtuviste un puntaje de {score}</h3>
                </>
            ) : (
                <h1>Accediste sin jugar la partida.</h1>
            )}
            <button onClick={() => navigate('/')}>Empezar de nuevo</button>
        </div>
    );
}

export default End;