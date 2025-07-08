import { HStack, Text } from "@chakra-ui/react";
import { styles } from "./EmptyState.style";

export const EmptyState = () => {
  return (
    <HStack sx={styles.container}>
      <Text>No result found!</Text>
    </HStack>
  );
};
