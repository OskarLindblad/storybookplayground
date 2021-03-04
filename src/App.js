import "./App.css";
import DataList from "./components/DataList/DataList";
//import Input from "./components/Input/Input";

import Scroll from "./components/Scroll/Scroll";
import DatePicker from "./datepicker/DatePicker";
import React, { useState } from "react";
import MultiRange from "./components/MultiRange/MultiRange";

function App() {
  const [dates, setDates] = useState([{ id: 1, value: 1 }]);
  const [test, setTest] = useState("");

  const addRange = () => {
    setDates((e) => [
      ...e,
      {
        id: Date.now(),
        value: 1,
      },
    ]);
  };

  let options = [
    {
      value: "test1",
      title: "Test1",
    },
    {
      value: "test2",
      title: "Test2",
    },
    {
      value: "test3",
      title: "Test3",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        Calcutron 2000
        <div style={{ width: "300px", border: "1px black solid" }}>
          <Scroll height="50px">
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
      <br />
      <MultiRange ranges={dates} setRanges={setDates} label={"Test"} />
      <button onClick={addRange}>Click</button>

      <br />
      <br />
      <DataList
        width="130px"
        options={options}
        value={test}
        setValue={setTest}
        label="korv"
      />
    </div>
  );
}

export default App;
