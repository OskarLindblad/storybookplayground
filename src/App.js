import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import Input from "./components/Input/Input";
import Scroll from "./components/Scroll/Scroll";

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
        <div style={{ width: "300px" }}>
          <Scroll height="100px">
            <DropDown label={"korv"} value={"korv"} />
            <br />
            <Input />
          </Scroll>
        </div>
      </header>
    </div>
  );
}

export default App;
