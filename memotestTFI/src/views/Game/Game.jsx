import { useLocation, useNavigate } from "react-router-dom";
import Board from "../../components/Board/Board.jsx";
import ClubImages from "../../assets/ClubImages.js";
import { useEffect, useState } from "react";
import "./Game.css";

const Game = () => {
    const shuffleArray = a => {
        return a
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const location = useLocation();
    const navigate = useNavigate();
    const { size, mode } = location.state || { size: '4x4', mode: '1' };
    const shuffledClubImages = shuffleArray(Object.values(ClubImages));
    const clubImagesList = size === '4x4' ? shuffledClubImages.slice(0, 8) : size === '6x6' ? shuffledClubImages.slice(0, 18) : size === '8x8' ? shuffledClubImages.slice(0, 32) : [];
    const [shuffledClubs, setShuffledClubs] = useState([]);
    const [flippedClubs, setFlippedClubs] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [score, setScore] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [turn, setTurn] = useState(1);

    useEffect(() => {
        const shuffledClubsList = shuffleArray([...clubImagesList, ...clubImagesList]);
        setShuffledClubs(shuffledClubsList.map((club, i) => ({ index: i, club, flipped: false, matched: false })));
    }, []);

    useEffect(() => {
        if (shuffledClubs.length > 0 && shuffledClubs.every(club => club.matched)) {
            navigate('/end', { state: { score, scorePlayer2, mode } });
        }
    }, [shuffledClubs, navigate, score, scorePlayer2]);

    const handleClubClick = (index) => {
        if (flippedClubs.length === 2 || shuffledClubs[index].matched || isProcessing || shuffledClubs[index].flipped) return;

        const newShuffledClubs = [...shuffledClubs];
        newShuffledClubs[index].flipped = !newShuffledClubs[index].flipped;
        setShuffledClubs(newShuffledClubs);

        const newFlippedClubs = [...flippedClubs, newShuffledClubs[index]];
        setFlippedClubs(newFlippedClubs);

        if (newFlippedClubs.length === 2) {
            setIsProcessing(true);
            setTimeout(() => {
                if (newFlippedClubs[0].club === newFlippedClubs[1].club) {
                    newShuffledClubs[newFlippedClubs[0].index].matched = true;
                    newShuffledClubs[newFlippedClubs[1].index].matched = true;
                    setShuffledClubs([...newShuffledClubs]);
                    updatePointsAndTurns(5);
                    setIsProcessing(false);
                } else {

                    newShuffledClubs[newFlippedClubs[0].index].flipped = false;
                    newShuffledClubs[newFlippedClubs[1].index].flipped = false;
                    setShuffledClubs([...newShuffledClubs]);
                    updatePointsAndTurns(-1);
                    setIsProcessing(false);
                }
            } , 1000);
            setFlippedClubs([]);
        }
    };

    const updatePointsAndTurns = (points) => {
        if (mode === '1') {
            setScore(score + points);
        } else {
            if (turn === 1) {
                setScore(score + points);
                setTurn(2);
            } else {
                setScorePlayer2(scorePlayer2 + points);
                setTurn(1);
            }
        }
    };

    return (
        <div className="game-container">
            <div className="memo-texts">
                <h1>Memotest</h1>
                <h3>Tamaño del tablero: {size}</h3>
                {mode === '1' ? (
                    <>
                        <h3>Modo de juego: 1 Jugador</h3>
                        <h3>Puntaje: {score}</h3>
                    </>
                ) : (
                    <>
                        <h3>Modo de juego: 2 Jugadores</h3>
                        <h3>Puntaje Jugador 1: {score}</h3>
                        <h3>Puntaje Jugador 2: {scorePlayer2}</h3>
                        <h3>Turno: Jugador {turn}</h3>
                    </>
                )}
            </div>
            <Board size={size} shuffledClubs={shuffledClubs} onClubClick={handleClubClick} />
        </div>
    );
};

export default Game;