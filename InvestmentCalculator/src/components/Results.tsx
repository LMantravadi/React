import {
  formatter,
  InvestmentResultsType as IR,
  InvestmentParametersType as IP,
  calculateInvestmentResults as CALC,
} from "../util/InvestmentParameters";

interface ResultsProps {
  userInput: IP;
}
export default function Results({ userInput }: ResultsProps) {
  const results = CALC(userInput);
  return (
    <>
      <table id="result">
        <thead className="thead">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {results.map((result: IR) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.investmentCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
