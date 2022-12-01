import "./App.css";
import { Introduction } from "./components/Introduction/Introduction";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
