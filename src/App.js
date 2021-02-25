import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DropDown label={"korv"} value={"korv"} />
        <br />
        <Input />
      </header>
    </div>
  );
}

export default App;
