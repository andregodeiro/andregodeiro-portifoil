import "./App.css";
import { Introduction } from "./components/Introduction/Introduction";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Introduction />
    </div>
  );
}

export default App;
