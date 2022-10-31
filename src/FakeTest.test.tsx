import { render, screen } from "@testing-library/react";
import { FakeComp } from "./FakeComp";

describe("A", () => {
    test("A", () => {
        render(<FakeComp />);
        const element = screen.getByText(/HOLA/i);
        expect(element).toBeInTheDocument();
    });
});
