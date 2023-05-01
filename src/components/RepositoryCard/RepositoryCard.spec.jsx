import {render, screen, waitFor} from '@testing-library/react';
import RepositoryCard from "./RepositoryCard";

describe("RepositoryCard", () => {
  it("Should render the RepositoryCard component correctly", async () => {
    const value = {
      html_url: "valid-url",
      name: "valid-name",
      stargazers_count: 100,
      description: "valid-description"
    }
    render(<RepositoryCard valud={value}/>);
    await waitFor(() => {
      expect(screen.getByText("valid-name")).toBeTruthy();
      expect(screen.getByText(100)).toBeInTheDocument();
      expect(screen.getByText("valid-description")).toBeInTheDocument();
    });
  });
});