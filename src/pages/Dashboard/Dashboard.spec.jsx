import Dashboard from "./Dashboard";
import {render, screen} from '@testing-library/react';

describe("Dashboard", () => {
  it("Should render the Dashboard component correctly", async () => {
    render(<Dashboard/>);
    expect(screen.getByTestId("Dashboard")).toBeInTheDocument();
  });
});