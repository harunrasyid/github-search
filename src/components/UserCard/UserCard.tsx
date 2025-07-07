import { Button, Collapse, HStack, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import type { IUserCardProps } from "./UserCard.props";
import { styles } from "./UserCard.style";

export const UserCard = ({
  name,
  isOpen = false,
  onClick,
  children,
}: IUserCardProps) => {
  return (
    <VStack sx={styles.container}>
      {/* Header */}
      <Button variant={"ghost"} onClick={onClick} sx={styles.button}>
        <HStack sx={styles.header}>
          <Text>{name}</Text>
          {isOpen ? (
            <ChevronUpIcon sx={styles.icon} />
          ) : (
            <ChevronDownIcon sx={styles.icon} />
          )}
        </HStack>
      </Button>

      {/* Collapsible Content */}
      <Collapse
        in={isOpen}
        animateOpacity
        style={{ width: "100%", paddingLeft: "24px" }}
      >
        <VStack sx={styles.children}>{children}</VStack>
      </Collapse>
    </VStack>
  );
};
