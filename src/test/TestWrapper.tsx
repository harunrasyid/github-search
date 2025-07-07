import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
