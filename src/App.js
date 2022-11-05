import { useContext } from "react";
import "./App.css";
import About from "./Components/About/About";
import Calender from "./Components/Calender";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

import Skills from "./Components/Skills/Skills";
import Stats from "./Components/stats";
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
      <Calender/>
      <Stats/>
     <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
