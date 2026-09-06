import { render, screen } from "@testing-library/react"
import { Hello } from "./Hello"

it.skip("test render Hello world", () => {
   render(<Hello/>);
   const myElement = screen.getByText('Hello World');
   screen.debug();
   expect(myElement).toBeInTheDocument();
})