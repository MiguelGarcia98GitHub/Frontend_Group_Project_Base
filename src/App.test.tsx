import { render, screen } from "@testing-library/react";
import App from "./App";

test("render HELLO on app component", () => {
    render(<App />);
    const textElement = screen.getByText("HELLO");
    expect(textElement).toBeInTheDocument();
});
