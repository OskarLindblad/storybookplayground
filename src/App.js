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
        Calcutron 2000
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
      <DatePicker />
    </div>
  );
}

export default App;
