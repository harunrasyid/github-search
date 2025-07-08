import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { UserCard } from "../UserCard";
import { vi } from "vitest";

describe("UserCard", () => {
  const setup = (isOpen: boolean = false, onClick = vi.fn()) => {
    render(
      <ChakraProvider>
        <UserCard name="John Doe" isOpen={isOpen} onClick={onClick}>
          <div>Child Content</div>
        </UserCard>
      </ChakraProvider>,
    );
  };

  it("renders user name", () => {
    setup();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("calls onClick when header button is clicked", () => {
    const handleClick = vi.fn();
    setup(false, handleClick);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("shows collapse content when open", () => {
    setup(true);
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });
});
