import { Button, Collapse, HStack, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import type { IUserCardProps } from "./UserCard.props";
import { styles } from "./UserCard.style";

/**
 * UserCard component displays a user's name in a collapsible card format.
 * The card header is clickable and toggles the visibility of its children content.
 *
 * @component
 * @param {IUserCardProps} props - The props for the UserCard component.
 * @param {string} props.name - Github username.
 * @param {boolean} [props.isOpen=false] - Whether the collapsible content is open.
 * @param {() => void} props.onClick - Callback fired when the header is clicked.
 * @param {React.ReactNode} props.children - Content to display inside the collapsible section.
 */
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
