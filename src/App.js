import "./App.css";
//import DropDown from "./components/DropDown/DropDown";
//import Input from "./components/Input/Input";
import Scroll from "./components/Scroll/Scroll";
import DatePicker from "./datepicker/DatePicker";
import React from "react";

function App() {
  //const [test, setTest] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        Calcutron 2000
        <div style={{ width: "300px", border: "1px black solid" }}>
          <Scroll height="50px">
            {/*<DropDown label={"korv"} value={"korv"} />
            <br />
            <Input
              label="Test"
              value={test}
              onChange={(e) => setTest(e.target.value)}
              smallField
            />*/}
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </Scroll>
        </div>
      </header>
      <br />
      <DatePicker />
    </div>
  );
}

export default App;
