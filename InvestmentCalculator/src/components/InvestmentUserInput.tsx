interface UserInputType {
  inputType: string;
  initialValue: number;
  onInputValueChange: (inputProperty: string, inputValue: number) => void;
}

export default function InvestmentUserInput({
  inputType,
  initialValue,
  onInputValueChange: onInputChange,
}: UserInputType) {
  let inputProperty = "";

  if (inputType === "INITIAL INVESTMENT") inputProperty = "initialInvestment";
  else if (inputType === "ANNUAL INVESTMENT")
    inputProperty = "annualInvestment";
  else if (inputType === "EXPECTED RETURN") inputProperty = "expectedReturn";
  else if (inputType === "DURATION") inputProperty = "duration";

  return (
    <>
      <section>
        <p>{inputType}</p>
        <p>
          <input
            type="number"
            required
            defaultValue={initialValue}
            onChange={(event) =>
              onInputChange(inputProperty, parseFloat(event.target.value))
            }
          />
        </p>
      </section>
    </>
  );
}
