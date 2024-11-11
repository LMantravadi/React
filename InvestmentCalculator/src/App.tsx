import "./App.css";
import Header from "./components/Header";
import InvestmentInputPanel from "./components/InvestmentInputPanel";

import Results from "./components/Results";

import { useState } from "react";

import {
  InvestmentParametersType as IP,
  InitialInvestmentValues as IV,
} from "./util/InvestmentParameters";

function App() {
  const [userInput, setUserInput] = useState<IP>(IV);

  const isInputValid = userInput.duration > 0;
  const handleUserInputChange = (
    inputProperty: string,
    newInputValue: number
  ) => {
    setUserInput((prevParams) => ({
      ...prevParams,
      [inputProperty]: +newInputValue,
    }));
  };

  return (
    <div>
      <Header />
      <InvestmentInputPanel
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
      />
      {!isInputValid && (
        <p className="center">Please enter a valid duration greater than 0</p>
      )}
      {userInput && isInputValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
