import './App.css'
import RouterApp from "./Router.jsx";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <>
        <div className="App">
            <Router>
                <RouterApp/>
            </Router>
        </div>
    </>
  )
}

export default App
