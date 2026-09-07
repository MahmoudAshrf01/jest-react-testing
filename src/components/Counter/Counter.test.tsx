import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
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
        fireEvent.click(screen.getByRole("button", {name: "add to counter"}));
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
    
    it("defaultCount=0, and - clicked then counter = -1", () => {
        fireEvent.click(screen.getByRole("button", {name: "subtract from counter"}));
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
    
    describe("when the Incrementor changes to 5 and  '+' button is  clicked", () => {
        beforeEach(() => {
            user.type(screen.getByLabelText(/Incrementor:/), "{selectall}5");
            user.click(screen.getByRole("button", {name: "add to counter"}))
        })
    
        it("renders 'Current Count: 0'", () => {
          expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
        })
    })
})
