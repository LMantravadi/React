import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen as sc } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";
test("Renders Hello World", () => {
    render(_jsx(Greeting, {}));
    const helloWorldElement = sc.getByText(/hello world/i);
    console.log(helloWorldElement);
    expect(helloWorldElement).toBeInTheDocument();
});
