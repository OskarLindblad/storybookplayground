import "./App.css";
//import DropDown from "./components/DropDown/DropDown";
//import Input from "./components/Input/Input";
//import Scroll from "./components/Scroll/Scroll";
import DatePicker from "./datepicker/DatePicker";
import React from "react";

function App() {
  //const [test, setTest] = useState("");

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
        <div style={{ width: "300px", border: "1px black solid" }}>
          {/*<Scroll height="100px">
            <DropDown label={"korv"} value={"korv"} />
            <br />
            <Input
              label="Test"
              value={test}
              onChange={(e) => setTest(e.target.value)}
              smallField
            />
  </Scroll>*/}
        </div>
      </header>
      <br />
      <br />
      <br />
      <DatePicker />
    </div>
  );
}

export default App;
