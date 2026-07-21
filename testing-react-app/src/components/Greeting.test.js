import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {

    beforeEach(() => {
        render(<Greeting/>);
    });

    it("renders Hello World as a text", () => {
        expect(screen.getByText(/hello world/i, {exact: false})).toBeInTheDocument();
    });

    it("renders good to see you if the button was NOT clicked", () => {
        expect(screen.getByText(/it's good to see you/i, {exact: false})).toBeInTheDocument();
    });

    it("renders change if the button is clicked", () => {
        expect(screen.getByText(/it's good to see you/i, {exact: false})).toBeInTheDocument();

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        userEvent.click(buttonElement);

        expect(screen.getByText("Change!")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("does not render 'good to see you' if the button is clicked", () => {
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        userEvent.click(buttonElement);

        expect(screen.getByText("Change!")).toBeInTheDocument();
        expect(screen.queryByText("good to see you", {exact: false})).toBeNull();
    })
});