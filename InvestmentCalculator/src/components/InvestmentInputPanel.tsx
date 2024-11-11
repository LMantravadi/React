import InvestmentUserInput from "./InvestmentUserInput";
import { InvestmentParametersType as IP } from "../util/InvestmentParameters";

interface UserInputProps {
  userInput: IP;
  handleUserInputChange: (inputProperty: string, inputValue: number) => void;
}
export default function InvestmentInputPanel({
  userInput,
  handleUserInputChange,
}: UserInputProps) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <InvestmentUserInput
            inputType="INITIAL INVESTMENT"
            initialValue={userInput.initialInvestment}
            onInputValueChange={handleUserInputChange}
          />

          <InvestmentUserInput
            inputType="ANNUAL INVESTMENT"
            initialValue={userInput.annualInvestment}
            onInputValueChange={handleUserInputChange}
          />
        </div>
        <div className="input-group">
          <InvestmentUserInput
            inputType="EXPECTED RETURN"
            initialValue={userInput.expectedReturn}
            onInputValueChange={handleUserInputChange}
          />
          <InvestmentUserInput
            inputType="DURATION"
            initialValue={userInput.duration}
            onInputValueChange={handleUserInputChange}
          />
        </div>
      </div>
    </>
  );
}
