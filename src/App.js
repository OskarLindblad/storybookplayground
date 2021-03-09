import "./App.css";

//import Scroll from "./components/Scroll/Scroll";
//import DatePicker from "./datepicker/DatePicker";
import React from "react";
import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";
//import MultiRange from "./components/MultiRange/MultiRange";

function App() {
  return (
    <div className="App">
      <LegalFeesDistrubution />
      {/*<header className="App-header">
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
      <MultiRange
        ranges={dates}
        setRanges={setDates}
        label={"Test"}
        rangeMax={48}
        startDate="01/01/2000"
      />
      <button onClick={addRange}>Click</button>*/}
    </div>
  );
}

export default App;

/*

  const [dates, setDates] = useState([{ id: 1, value: 1 }]);

  const addRange = () => {
    setDates((e) => [
      ...e,
      {
        id: Date.now(),
        value: dates[dates.length - 1].value + 1,
      },
    ]);
  };
*/
