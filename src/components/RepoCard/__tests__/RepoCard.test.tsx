import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { RepoCard } from "../RepoCard";

describe("RepoCard", () => {
  it("renders repo name, star count, and description", () => {
    const props = {
      name: "my-repo",
      star: 42,
      description: "This is a test repository.",
    };

    render(
      <ChakraProvider>
        <RepoCard {...props} />
      </ChakraProvider>,
    );

    // Check name
    expect(screen.getByText("my-repo")).toBeInTheDocument();

    // Check star count
    expect(screen.getByText("42")).toBeInTheDocument();

    // Check description
    expect(screen.getByText("This is a test repository.")).toBeInTheDocument();
  });
});
