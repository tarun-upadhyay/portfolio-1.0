import { useContext } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

import Skills from "./Components/Skills/Skills";
import { ThemeContext } from "./context";

function App() {
  const {state} = useContext(ThemeContext);
const theme = state.darkMode;
  return (
    <div className="App" style={{backgroundColor: theme ?  "#222": "white", color: theme && "white"}}>
      <Navbar />

      <Intro />
      <About/>
      <Skills/>
     <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
