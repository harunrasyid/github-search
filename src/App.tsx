import { useState } from "react";
import { Button, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { RepoCard, UserCard } from "@/components";
import { styles } from "./App.style.ts";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <VStack sx={styles.page}>
      {/* Search */}
      <Stack sx={styles.search}>
        {/* Input */}
        <Input placeholder="Enter username" />

        {/* Button */}
        <Button colorScheme="blue" sx={styles.button}>
          Search
        </Button>
      </Stack>

      {/* Information */}
      <Text>{`Showing users for `}</Text>

      {/* List */}
      <UserCard
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        name={"Username 1"}
      >
        <RepoCard name={"Abcd"} star={12} description={"ABCD"} />
      </UserCard>

      {/* Empty State */}
    </VStack>
  );
}

export default App;
