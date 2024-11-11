
export interface InvestmentParametersType  {
    initialInvestment: number;    // The initial investment amount
    annualInvestment: number;     // The amount invested every year
    expectedReturn: number;       // The expected (annual) rate of return
    duration: number;             // The investment duration (time frame)
  }

export interface InvestmentResultsType {
      year: number,               // year identifier
      interest: number,           // the amount of interest earned in this year
      totalInterest: number,      // the amount of interest earned so far
      valueEndOfYear: number,     // investment value at end of year
      annualInvestment: number,   // investment added in this year
      investmentCapital: number     // investment capital
}

export const InitialInvestmentValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
  
// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
} : InvestmentParametersType) : InvestmentResultsType[] {
  const annualData : InvestmentResultsType[] = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear // NEW
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest: totalInterest,
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      investmentCapital: investmentValue - totalInterest // NEW
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
