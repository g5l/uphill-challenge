import {render, screen, waitFor} from '@testing-library/react';
import UserCard from "./UserCard";

describe("UserCard", () => {
  it("Should render the UserCard component correctly", async () => {
    const value = {
      login: "valid-login",
      email: "valid-email",
      followers: 100,
    }
    render(<UserCard valud={value}/>);
    await waitFor(() => {
      expect(screen.getByText("valid-login")).toBeTruthy();
      expect(screen.getByText("valid-email")).toBeInTheDocument();
      expect(screen.getByText(100)).toBeInTheDocument();
    });
  });
});