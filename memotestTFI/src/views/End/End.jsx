import { useLocation, useNavigate } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import './End.css';
import Confetti from 'react-confetti'

const End = () => {
    const navigate = useNavigate();
    const { width, height } = useWindowSize()
    const location = useLocation();
    const { score, scorePlayer2, mode } = location.state || { score: 0, scorePlayer2 : 0, mode : undefined };

    return (
        <div className="end-container">

            {mode === "2" ? (
                <>
                    <Confetti
                        width={width}
                        height={height}
                    />
                    <h1>¡Juego finalizado!</h1>
                    <h3>Puntaje Jugador 1: {score}</h3>
                    <h3>Puntaje Jugador 2: {scorePlayer2}</h3>
                </>
            ) : mode === "1" ? (
                <>
                    <Confetti
                        width={width}
                        height={height}
                    />
                    <h1>¡Juego finalizado!</h1>
                    <h3 className={"player-score"}>Obtuviste un puntaje de {score}</h3>
                </>
            ) : (
                <h1>Accediste sin jugar la partida.</h1>
            )}
            <button onClick={() => navigate('/')}>Menú de Inicio</button>
        </div>
    );
}

export default End;