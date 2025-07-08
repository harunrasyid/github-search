import { render, screen } from "@testing-library/react";
import { EmptyState } from "../EmptyState";
import { ChakraProvider } from "@chakra-ui/react";

it('renders the "No result found!" text', () => {
  render(
    <ChakraProvider>
      <EmptyState />
    </ChakraProvider>,
  );

  expect(screen.getByText("No result found!")).toBeInTheDocument();
});
