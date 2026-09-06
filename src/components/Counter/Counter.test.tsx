import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("initialized with defaultCount=0 and desciption='testing the counter logic'", () => {
    beforeEach(() => {
        render(<Counter description={"testing the counter logic"} defaultCount={0}/>);
    })

    it("defaultCount=0, then counter = 1", () => {
        expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
    });

    it("defaultCount=0, then counter = 1", () => {
        expect(screen.getByText(/testing the counter logic/i)).toBeInTheDocument();
    });
    
    it("defaultCount=0, and + clicked then counter = 1", () => {
        fireEvent.click(screen.getByRole("button", {name: "+"}));
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
    
    it("defaultCount=0, and - clicked then counter = -1", () => {
        fireEvent.click(screen.getByRole("button", {name: "-"}));
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
})

