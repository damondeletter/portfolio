import './App.css';
import Intro from './components/Intro';
import AboutMe from "./components/AboutMe.jsx";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/"><Intro/></Route>
      <Route exact path="/aboutMe"><AboutMe/></Route>
    </Switch>
  );
}

export default App;
