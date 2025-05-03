import { render, screen as sc } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

describe;

test("Renders Hello World", () => {
  render(<Greeting />);
  const helloWorldElement = sc.getByText(/hello world/i);
  console.log(helloWorldElement);

  expect(helloWorldElement).toBeInTheDocument();
});
