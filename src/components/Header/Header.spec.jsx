import {render, screen} from '@testing-library/react';
import Header from "./Header";

describe("Header", () => {
  it("Should render the Header component correctly", async () => {
    render(<Header/>);
    expect(screen.getByTestId("Header")).toBeInTheDocument();
    expect(screen.getByTestId("Search")).toBeInTheDocument();
  });
});