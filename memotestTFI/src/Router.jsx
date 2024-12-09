import {Route, Routes} from 'react-router-dom';
import Start from "./views/Start/Start.jsx";
import Game from "./views/Game/Game.jsx";
import End from "./views/End/End.jsx";

const RouterApp = () => (
    <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="*" element={<Start/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/end" element={<End/>}/>
    </Routes>
);

export default RouterApp;