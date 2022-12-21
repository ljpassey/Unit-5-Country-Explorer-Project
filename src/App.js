import { useSelector } from "react-redux";

import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

function App() {
  const potentials = useSelector(selectPotentials);
  console.log(potentials);

  const currentDisplay = useSelector(selectDisplay);
  console.log("DISPLAY", currentDisplay);
  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
